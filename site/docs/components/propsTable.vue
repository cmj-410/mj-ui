<template>
  <div class="propsTable-wrapper">
    <h3>{{ descriptType }}</h3>
    <table class="table">
      <thead>
        <tr>
          <th v-for="item in propsHead">
            {{ item.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in propsBody" :key="(item as any).name">
          <td
            v-for="(val, name) in item"
            :key="name"
            :width="getColumnWidth(name)"
          >
            <span :innerHTML="val"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  descriptType: {
    type: String
  },
  propsBody: {
    type: Array,
    require: true
  }
})
const propsHead = [
  {
    name: '名称',
    value: 'property'
  },
  {
    name: '类型',
    value: 'type'
  },
  {
    name: '默认值',
    value: 'default'
  },
  {
    name: '描述说明',
    value: 'description'
  },
  {
    name: '是否必填',
    value: 'required'
  }
]
const columnWidth = {
  property: '50px',
  type: '60px',
  default: '80px',
  description: '500px',
  required: '90px'
}
const getColumnWidth = (val: string) => {
  return columnWidth[val]
}
</script>

<style lang="less" scoped>
@border-color: #d3dae6;
.propsTable-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 10px;
  th {
    font-size: 12px;
  }
  th,
  td {
    border: 1px solid #d3dae6;
  }
  td:last-child {
    text-align: center;
  }
  .table {
    margin-bottom: 0;
  }
}
</style>
