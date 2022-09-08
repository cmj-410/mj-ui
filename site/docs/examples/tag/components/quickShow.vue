<template>
  <show-box title="mj-tabs">
    <template #left>
      <mj-tag
        v-show="show"
        :filled="tagFilled"
        :closable="tagClosable"
        :type="tagType"
        @close="show = false"
      >
        <span>{{ tagText }}</span>
      </mj-tag>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-select
          v-model="tagType"
          placeholder="请选择"
          label-top="选择类型"
          :options="tagTypes"
        >
        </mj-select>
        <mj-input v-model="tagText" label-top="文本" />
        <mj-checkbox v-model="tagFilled" label="是否填充" />
        <mj-checkbox v-if="show" v-model="tagClosable" label="可关闭" />
        <mj-button v-else @click="show = true">复原tag</mj-button>
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
const tagFilled = ref(true)
const tagClosable = ref(false)
const tagType = ref('neutral')
const tagText = ref('tag')

const tagTypes = ['neutral', 'primary', 'success', 'danger', 'warning']
</script>
