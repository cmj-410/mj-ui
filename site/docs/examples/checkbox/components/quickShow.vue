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
          placeholder="请选择"
          label-top="Checkbox基础类型"
          :options="checkboxTypes"
        >
          >
        </mj-select>
        <mj-input v-model="checkboxLabel" label-top="Checkbox标签" />
        <mj-textarea
          v-model="checkboxSubLabel"
          placeholder="添加额外的说明信息"
          resize-on-write
          label-top="Checkbox子标签"
        />
        <!-- <mj-input v-model="checkboxSubLabel" label-top="Checkbox sublabel" /> -->
        <mj-input v-model="checkboxIcon" label-top="Icon" />
        <mj-checkbox v-model="lineCheck" label="划线" />
        <mj-checkbox v-model="checkboxPulse" label="跳动" />
        <mj-checkbox v-model="checkboxDisabled" label="禁用" />
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
