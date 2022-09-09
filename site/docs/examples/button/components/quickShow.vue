<template>
  <show-box title="mj-button">
    <template #left>
      <mj-button
        :type="buttonType"
        :outlined="buttonOutlined"
        :round="buttonRound"
        :pulse="buttonPulse"
        :loading="buttonLoading"
        :disabled="buttonDisabled"
        :icon="buttonIconValue"
        :block="buttonBlock"
        >{{ buttonText }}</mj-button
      >
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-select
          v-model="buttonType"
          placeholder="请选择"
          label-top="按钮类型"
          :options="buttonTypes"
        >
        </mj-select>
        <mj-input v-model="buttonText" label-top="按钮文案" />
        <mj-checkbox v-model="buttonOutlined" label="强调" />
        <mj-checkbox v-model="buttonRound" label="圆角" />
        <mj-checkbox v-model="buttonIcon" label="Icon" />
        <mj-checkbox v-model="buttonLoading" label="加载中" />
        <mj-checkbox v-model="buttonPulse" label="跳动" />
        <mj-checkbox v-model="buttonBlock" label="块级元素" />
        <mj-checkbox v-model="buttonDisabled" label="禁用" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { ref } from 'vue'

const buttonText = ref('按钮')
const buttonOutlined = ref(false)
const buttonRound = ref(false)
const buttonDisabled = ref(false)
const buttonLoading = ref(false)
const buttonPulse = ref(false)
const buttonBlock = ref(false)
const buttonType = ref('primary')
const buttonTypes = ['neutral', 'primary', 'success', 'danger', 'warning']
const buttonIcon = ref('false')
const buttonIconValue = computed(() => (buttonIcon.value ? 'face' : null))
</script>

<style lang="less" scoped></style>
