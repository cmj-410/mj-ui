<template>
  <div class="mj-table" ref="theTable">
    <mj-loading v-if="loading" color="#fff" :radius="10" :stroke="3" />

    <div :class="innerClass">
      <table-header :header-list="columns" :width="_table_width"></table-header>

      <div class="mj-table-body-area" :style="bodyAreaStyle">
        <div class="scrollbar"></div>

        <table class="mj-table-body" :style="`width:${_table_width}px`">
          <col-group :cols="columns"></col-group>

          <tbody class="mj-table-body-tbody">
            <table-empty
              :fillEmpty="EmptyDes"
              v-if="isEmpty"
              :colspan="columns.length"
            ></table-empty>

            <template v-else>
              <tr
                v-for="(item, index) in dataSource"
                :key="`mj-table-tbody-tr-${index}`"
              >
                <td
                  v-for="(v, k) in columns"
                  :key="`mj-table-tbody-td-${index}-${k}`"
                  :class="tdClass(v)"
                >
                  <template v-if="!v.scope">{{ item[v.key] }}</template>

                  <slot
                    v-else
                    :name="v.scope.customRender"
                    :row="item"
                    :index="index"
                    :data="item[v.key]"
                  ></slot>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import './styles/index.less'
import { defineProps, computed } from 'vue'
import { useTable } from './table'
import TableHeader from './components/table-header.vue'
import TableEmpty from './components/empty.vue'
import ColGroup from './components/col-group.vue'

const props = defineProps({
  cols: { type: Array, default: () => [] }, // 表格头部列表
  dataSource: { type: Array, default: () => [] }, // 表格数据
  height: { type: String, default: '' }, // 固定高度
  loading: { type: Boolean, default: false }, // 加载状态
  border: { type: Boolean, default: false }, // 展示边框
  stripe: { type: Boolean, default: false }, // 斑马纹
  EmptyDes: { type: String, default: '暂无数据' }, //无数据的填充描述
})

const { theTable, columns, _table_width } = useTable(props)

const isEmpty = computed(() => props.dataSource.length === 0)
const hasBorder = computed(() => props.border)
const isStripe = computed(() => props.stripe)
const fixedHeight = computed(() => props.height)

const bodyAreaStyle = computed(() => {
  if (props.height) {
    return `width:${_table_width.value}px;max-height:${props.height}px;height:${props.height}px;overflow-y:auto`
  }
  return `width:${_table_width.value}px`
})

const innerClass = computed(() => {
  let name = [
    'mj-table-inner',
    { 'mj-table-border': hasBorder.value },
    { 'mj-table-stripe': isStripe.value },
    { 'mj-table-fixed-header': fixedHeight.value },
  ]
  return name
})

const tdClass = (v) => {
  let align = `text-${v['align'] || 'left'}`

  let name = [align]
  return name
}
</script>

<script>
export default { name: 'mj-table' }
</script>
