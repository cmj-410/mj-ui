<template>
  <tr class="mj-table-empty-tr">
    <td :colspan="colspan">{{ fillEmpty }}</td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  colspan: { type: Number, default: 0 },
  fillEmpty: { type: String },
})
</script>

<script>
export default { name: 'mj-table-empty' }
</script>
