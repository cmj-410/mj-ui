<template>
  <show-box title="mj-drawer">
    <template #left>
      <mj-button type="primary" @click="drawerVisible = true"
        >打开抽屉</mj-button
      >
      <mj-drawer
        v-model="drawerVisible"
        :placement="position"
        :closableMask="closableMask"
        :hideMask="hiddenMask"
      >
        <div class="drawerInerWrapper">
          <div class="title">
            当前为{{ position == 'left' ? '左侧' : '右侧' }}抽屉
          </div>
          <p>抽屉中可以放入任意内容。</p>
          <span class="buttonOption">
            <mj-button @click="() => (drawerVisible = false)" type="primary"
              >知道了</mj-button
            >
          </span>
        </div>
      </mj-drawer>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-select
          v-model="position"
          :options="selectOptions"
          label="选中抽屉位置"
        />
        <mj-checkbox v-model="hiddenMask" label="隐藏遮罩" />
        <mj-checkbox v-model="closableMask" label="可通过遮罩关闭" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawerVisible = ref(false)
const position = ref('left')
const selectOptions = ['left', 'right']

const hiddenMask = ref(false)
const closableMask = ref(true)
</script>

<style lang="less" scoped>
.drawerInerWrapper {
  position: relative;
  height: 100%;
  .title {
    line-height: 30px;
    font-size: 24px;
  }
  .buttonOption {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 15px;
  }
}
</style>
