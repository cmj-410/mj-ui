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
        <mj-number-input v-model="sliderMin" label-top="Min" />
        <mj-number-input v-model="sliderMax" label-top="Max" />
        <mj-number-input v-model="sliderStep" label-top="Step" />
        <mj-checkbox v-model="sliderNumbers" label="Numbers" />
        <mj-checkbox v-model="sliderStepPoints" label="Step points" />
        <mj-checkbox v-model="sliderDisabled" label="Disabled" />
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
