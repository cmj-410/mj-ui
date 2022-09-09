<template>
  <show-box title="mj-tooltip">
    <template #left>
      <mj-tooltip
        :content="tooltipContent"
        :placement="tooltipPlacement"
        :disabled="disabled"
      >
        <mj-textarea
          v-model="textareaValue"
          placeholder="可以输入..  鼠标hover有提示信息"
          >鼠标悬浮到这里</mj-textarea
        >
      </mj-tooltip>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-select
          v-model="tooltipPlacement"
          placeholder="请选择"
          label-top="提示放置位置"
          :options="tooltipPlacements"
        ></mj-select>
        <mj-input v-model="tooltipContent" label-top="Tooltip text" />
        <mj-checkbox v-model="disabled" label="禁用提示" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ALLOWED_POSITION } from '../data/constants'

const textareaValue = ref('')

const disabled = ref(false)

const tooltipContent = ref('这里是提示信息')
const tooltipPlacement = ref('top')
const tooltipPlacements = ALLOWED_POSITION
</script>
