<template>
  <div class="showBlock-wrapper">
    <div
      :class="[
        {
          'showBlock-horizontal': !vertical
        },
        {
          'showBlock-vertical': vertical
        }
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  vertical: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="less" scoped>
@border-color: #d3dae6;
.showBlock-wrapper {
  border: 1px solid @border-color;
}
.showBlock-horizontal {
  display: flex;
  justify-content: center;
  margin: 30px 20px;
}
.showBlock-vertical {
  display: flex;
  flex-direction: column;
  margin: 30px 20px;
}
</style>
