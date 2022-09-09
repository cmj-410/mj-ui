<template>
  <show-box title="mj-slider">
    <template #left>
      <div style="width: 200px">
        <mj-slider
          v-model="sliderValue"
          :step-points="sliderStepPoints"
          :disabled="sliderDisabled"
          :min="sliderMin"
          :max="sliderMax"
          :step="sliderStep"
          :numbers="sliderNumbers"
        />
      </div>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-number-input v-model="sliderMin" label-top="最小值" />
        <mj-number-input v-model="sliderMax" label-top="最大值" />
        <mj-number-input v-model="sliderStep" label-top="步长" />
        <mj-checkbox v-model="sliderNumbers" label="当前值" />
        <mj-checkbox v-model="sliderStepPoints" label="刻度" />
        <mj-checkbox v-model="sliderDisabled" label="禁用" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const sliderValue = ref(14)
const sliderMin = ref(0)
const sliderMax = ref(42)
const sliderStep = ref(1)
const sliderStepPoints = ref(false)
const sliderDisabled = ref(false)
const sliderNumbers = ref(false)
</script>
