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
defineProps(["title"])
</script>

<style lang="less" scoped>
@border-color: #d3dae6;

h3 {
  margin: 0;
  border-bottom: 1px solid @border-color;
}

.showBox-wrapper {
  border: 1px solid #d3dae6;
  display: flex;
  justify-content: center;

  .showBox-left {
    flex: 1;
    flex-basis: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #d3dae6;

    &-content {
      margin: 0 auto;
    }
  }

  .showBox-right {
    min-width: 200px;
    padding: 20px 16px;
  }
}
</style>