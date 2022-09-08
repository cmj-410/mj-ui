<template>
  <show-box title="mj-textarea">
    <template #left>
      <mj-textarea
        v-model="textareaValue"
        :resizable="textareaResizable"
        :resize-on-write="textareaResizeWrite"
        :disabled="textareaDisabled"
        :label-top="textareaTopLabel"
        :placeholder="textareaPlaceholder"
        :mask="mask"
      ></mj-textarea>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-input v-model="textareaPlaceholder" label-top="Placeholder text" />
        <mj-input v-model="textareaTopLabel" label-top="Label" />
        <mj-checkbox v-model="textareaResizable" label="Resizable" />
        <mj-checkbox v-model="textareaResizeWrite" label="Resize on write" />
        <mj-checkbox v-model="mask" label="Mask" />
        <mj-checkbox v-model="textareaDisabled" label="Disabled" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const textareaPlaceholder = ref('textarea placeholder')
const textareaTopLabel = ref('写点什么吧')
const textareaResizable = ref(false)
const textareaDisabled = ref(false)
const textareaValue = ref('')
const textareaResizeWrite = ref(false)
const mask = ref(false)

watch(textareaDisabled, (newValue) => {
  if (newValue) {
    textareaTopLabel.value = '被禁用啦'
  }
})
</script>
