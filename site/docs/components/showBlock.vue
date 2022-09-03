<template>
  <div class="showBlock-wrapper">
    <span class="showBlock-showBlock">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="less" scoped>
@border-color: #d3dae6;
.showBlock-wrapper {
  border: 1px solid @border-color;
}
.showBlock-showBlock {
  display: flex;
  justify-content: center;
  margin: 30px 20px;
}
</style>
