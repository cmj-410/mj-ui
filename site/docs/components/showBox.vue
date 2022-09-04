<template>
  <div class="showBox-wrapper">
    <div class="showBox-left">
      <span class="showBox-left-content">
        <slot name="left"></slot>
      </span>
    </div>
    <div class="showBox-right">
      <h3>{{ title }}</h3>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(['title'])
</script>

<style lang="less" scoped>
@border-color: #d3dae6;

h3 {
  text-align: center;
  margin: 0 0 10px 0;
  border-bottom: 1px solid @border-color;
}

.showBox-wrapper {
  border: 1px solid @border-color;
  display: flex;
  justify-content: center;

  .showBox-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
    border-right: 1px solid @border-color;

    &-content {
      display: flex;
      justify-content: center;
    }
  }

  .showBox-right {
    min-width: 200px;
    padding: 20px 16px;
  }
}
</style>
