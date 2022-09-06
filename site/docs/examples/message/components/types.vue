<template>
  <mj-button type="primary" @click="showMessage">Primary message</mj-button>
  <mj-button type="success" @click="showMessage('success')"
    >Success message</mj-button
  >
  <mj-button type="danger" @click="showMessage('danger')"
    >Danger message</mj-button
  >
  <mj-button type="warning" @click="showMessage('warning')"
    >Warning message</mj-button
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    showMessage(type: string) {
      switch (type) {
        case 'success':
          this.$Message.success({ text: 'Success message!' })
          break
        case 'danger':
          this.$Message.danger({ text: 'Danger message!' })
          break
        case 'warning':
          this.$Message.warning({ text: 'Warning message!' })
          break
        default:
          this.$Message({ text: 'Primary message!' })
          break
      }
    },
  },
})
</script>
