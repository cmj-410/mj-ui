<template>
  <show-box title="mj-table">
    <template #left>
      <div class="tableWrapper">
        <mj-table
          :cols="demoCol"
          :data-source="demoData"
          :border="hasBorder"
          :stripe="hasStripe"
        >
          <template #seat="{ row }">
            <b>{{ row.seat || '-' }}</b>
          </template>
          <template #name="{ row }">
            <mj-tag>{{ row.name || '-' }}</mj-tag>
          </template>
          <template #results="{ row }">
            <span>{{ row.results || '-' }}</span>
          </template>
          <template #action>
            <mj-button type="primary" size="small">编辑</mj-button>
            <span style="margin-left: 10px">
              <mj-button type="danger" size="small">删除</mj-button>
            </span>
          </template>
        </mj-table>
      </div>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <!-- <mj-checkbox v-model="isLoading" label="loading" /> -->
        <mj-checkbox v-model="alignCenter" label="居中" />
        <mj-checkbox v-model="hasBorder" label="边框" />
        <mj-checkbox v-model="hasStripe" label="区分行" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const isLoading = ref(false)
const alignCenter = ref(true)
const hasBorder = ref(false)
const hasStripe = ref(true)

const demoCol = computed(() => {
  let temp = [
    { align: '', label: '学号', width: 50, scope: { customRender: 'seat' } },
    { align: '', label: '姓名', scope: { customRender: 'name' } },
    { align: '', label: '成绩', scope: { customRender: 'results' } },
    { align: '', label: '操作', scope: { customRender: 'action' } },
  ]
  if (alignCenter.value) {
    temp.forEach((item) => {
      item.align = 'center'
    })
  } else {
    temp.forEach((item) => {
      item.align = ''
    })
  }
  return temp
})

const demoData = [
  { seat: '1', name: '李白', results: '94' },
  { seat: '15', name: '杜甫', results: '87' },
  { seat: '18', name: '白居易', results: '99' },
  { seat: '28', name: '夏侯惇', results: '76' },
]
</script>

<style scoped lang="less">
.tableWrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
