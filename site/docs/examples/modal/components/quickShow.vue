<template>
  <show-box title="mj-modal">
    <template #left>
      <mj-alert
        v-show="alertVisible"
        :iconbox="alertIconBox"
        :type="alertType"
        :show-icon="alertShowIcon"
        :closable="alertClosable"
        :title="alertTitle"
        :body="alertBody"
        @on-close="alertVisible = false"
      />
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-select
          v-model="alertType"
          placeholder="Select type"
          label-top="Alert type"
          :options="alertTypes"
        />
        <mj-input v-model="alertTitle" label-top="Alert title" />
        <mj-input v-model="alertBody" label-top="Alert Body" />
        <mj-checkbox v-model="alertShowIcon" label="Icon" />
        <mj-checkbox v-model="alertIconBox" label="Icon box" />
        <mj-checkbox v-model="alertClosable" label="Closable" />
        <mj-checkbox v-model="alertVisible" label="Visible" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const alertVisible = ref(true)
const alertTitle = ref('标题')
const alertBody = ref('这里是主体内容')
const alertShowIcon = ref(true)
const alertClosable = ref(false)
const alertType = ref('primary')
const alertTypes = ['primary', 'success', 'danger', 'warning']
const alertIconBox = ref(false)
</script>
