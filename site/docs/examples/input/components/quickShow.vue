<template>
  <show-box title="mj-input">
    <template #left>
      <mj-input
        v-model="inputValue"
        :placeholder="inputPlaceholder"
        :label-top="inputTopLabel"
        :disabled="inputDisabled"
        :message="inputMessageText"
        :status="inputStatus"
        :mask="inputMask"
        :prefix="prefixValue"
        :suffix="suffixValue"
        :prefixIcon="prefixIcon"
        :suffixIcon="suffixIcon"
      />
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-input v-model="inputPlaceholder" label-top="placeholder" />
        <mj-input v-model="inputTopLabel" label-top="标签" />
        <mj-input
          v-model="inputMessageText"
          placeholder="请输入"
          label-top="input提示信息"
        />
        <mj-input
          v-model="prefixValue"
          placeholder="请输入"
          label-top="前置文本"
        />
        <mj-input
          v-model="suffixValue"
          placeholder="请输入"
          label-top="后置文本"
        />
        <mj-select
          v-model="inputStatus"
          placeholder="请选择"
          label-top="状态"
          :options="statuses"
        >
        </mj-select>
        <mj-checkbox v-model="openPrefixIcon" label="前置icon" />
        <mj-checkbox v-model="openSuffixIcon" label="后置icon" />
        <mj-checkbox v-model="inputMask" label="遮罩" />
        <mj-checkbox v-model="inputDisabled" label="禁用" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { ref } from 'vue'

const inputPlaceholder = ref('placeholder')
const inputValue = ref('')
const inputTopLabel = ref('请输入')
const inputMessageText = ref('')
const inputDisabled = ref(false)
const inputStatus = ref('neutral')
const inputMask = ref(false)
const statuses = ['neutral', 'success', 'danger', 'warning']
const prefixValue = ref('http://')
const suffixValue = ref('.com')
const openPrefixIcon = ref(false)
const prefixIcon = computed(() => {
  if (openPrefixIcon.value) {
    return 'home'
  }
})
const openSuffixIcon = ref(false)
const suffixIcon = computed(() => {
  if (openSuffixIcon.value) {
    return 'home'
  }
})
</script>
