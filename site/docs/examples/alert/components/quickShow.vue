<template>
  <show-box title="mj-alert">
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
          placeholder="请选择"
          label-top="警告类型"
          :options="alertTypes"
        />
        <mj-input v-model="alertTitle" label-top="警告标题" />
        <mj-input v-model="alertBody" label-top="警告体" />
        <mj-checkbox v-model="alertShowIcon" label="Icon" />
        <mj-checkbox v-model="alertIconBox" label="盒型Icon" />
        <mj-checkbox v-model="alertClosable" label="可关闭" />
        <mj-checkbox v-model="alertVisible" label="显示" />
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
