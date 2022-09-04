<template>
  <show-box title="mj-select">
    <template #left>
      <mj-select
        v-model="selectValue"
        track-by="value"
        :placeholder="selectPlaceholder"
        :disabled="selectDisabled"
        :placement="selectPlacement"
        :label-top="selectLabel"
        :divided="selectDivided"
        :options="firstSelectOptions"
      />
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-input v-model="selectLabel" label-top="Select label" />
        <mj-input v-model="selectPlaceholder" label-top="Select placeholder" />
        <mj-select
          v-model="selectPlacement"
          placeholder="Placement"
          label-top="Placement"
          :options="placementOptions"
        />
        <mj-checkbox v-model="selectDivided" label="Divided" />
        <mj-checkbox v-model="selectDisabled" label="Disabled" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ALLOWED_POSITION } from '../data/constants'

const selectValue = ref('')
const selectLabel = ref('性别')
const selectPlaceholder = ref('请选择')
const selectDisabled = ref(false)
const selectDivided = ref(false)
const selectPlacement = ref(null)
const placementOptions = ALLOWED_POSITION
const firstSelectOptions = [
  {
    name: '男',
    value: 'male',
  },
  {
    name: '女',
    value: 'female',
  },
]
</script>
