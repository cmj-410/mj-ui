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
        <mj-input v-model="selectLabel" label-top="标签" />
        <mj-input v-model="selectPlaceholder" label-top="placeholder" />
        <mj-select
          v-model="selectPlacement"
          placeholder="请选择"
          label-top="位置"
          :options="placementOptions"
        />
        <mj-checkbox v-model="selectDivided" label="划分" />
        <mj-checkbox v-model="selectDisabled" label="禁用" />
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
