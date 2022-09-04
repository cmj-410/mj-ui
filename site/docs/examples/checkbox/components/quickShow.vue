<template>
  <show-box title="mj-checkbox">
    <template #left>
      <mj-checkbox
        v-model="checkboxValue"
        :line-through="lineCheck"
        :disabled="checkboxDisabled"
        :type="checkboxType"
        :pulse="checkboxPulse"
        :icon="checkboxIcon"
        :label="checkboxLabel"
        :sub-label="checkboxSubLabel"
      >
        <template #sublabel>{{ checkboxSubLabel }}</template>
      </mj-checkbox>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-select
          v-model="checkboxType"
          placeholder="Select type"
          label-top="Checkbox type"
          :options="checkboxTypes"
        >
          >
        </mj-select>
        <mj-input v-model="checkboxLabel" label-top="Checkbox label" />
        <mj-textarea
          v-model="checkboxSubLabel"
          placeholder="添加额外的说明信息"
          resize-on-write
          label-top="Checkbox sublabel"
        />
        <!-- <mj-input v-model="checkboxSubLabel" label-top="Checkbox sublabel" /> -->
        <mj-input v-model="checkboxIcon" label-top="Checkbox icon" />
        <mj-checkbox v-model="lineCheck" label="Line through" />
        <mj-checkbox v-model="checkboxPulse" label="Pulse" />
        <mj-checkbox v-model="checkboxDisabled" label="Disabled" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkboxDisabled = ref(false)
const checkboxValue = ref(false)
const checkboxPulse = ref(false)
const checkboxLabel = ref('多选框')
const checkboxSubLabel = ref('')
const checkboxIcon = ref('check')
const checkboxType = ref('primary')
const checkboxTypes = [
  'primary',
  'success',
  'danger',
  'warning',
  'black',
  'neutral',
]

// const typesCheck = ref(false)
// const iconsCheck = ref(false)

const lineCheck = ref(false)

// const pulseValue = ref(false)
</script>
