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
      />
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-input v-model="inputPlaceholder" label-top="placeholder" />
        <mj-input v-model="inputTopLabel" label-top="标签" />
        <mj-input
          v-model="inputMessageText"
          placeholder="请输入"
          label-top="输入点什么"
        />
        <mj-select
          v-model="inputStatus"
          placeholder="请选择"
          label-top="状态"
          :options="statuses"
        >
        </mj-select>
        <mj-checkbox v-model="inputMask" label="遮罩" />
        <mj-checkbox v-model="inputDisabled" label="禁用" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const alertVisible = ref(true)

const inputPlaceholder = ref('placeholder')
const inputValue = ref('')
const inputTopLabel = ref('请输入')
const inputMessageText = ref('')
const inputDisabled = ref(false)
const inputStatus = ref('default')
const inputMask = ref(false)
const statuses = ['default', 'success', 'danger', 'warning']
</script>
