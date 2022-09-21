<template>
  <colgroup>
    <col
      v-for="(item, index) in cols"
      :key="`mj-table-tr-${index}`"
      :name="`bp_table_tr_${index}`"
      :width="`${item.width}px`"
    />
  </colgroup>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  cols: { type: Array, default: () => [] },
})
</script>

<script>
export default { name: 'mj-table-columns' }
</script>
