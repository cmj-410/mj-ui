<template>
  <show-box title="mj-tabs">
    <template #left>
      <mj-tabs :vertical="verticalTab" :box="boxTab">
        <mj-tab title="Tab 1">First tab</mj-tab>
        <mj-tab title="Tab 2">Second tab</mj-tab>
        <mj-tab title="Tab 3" :disabled="disabledTab">Third tab</mj-tab>
      </mj-tabs>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-checkbox v-model="verticalTab" label="Vertical" />
        <mj-checkbox v-model="boxTab" label="Tab Box" />
        <mj-checkbox v-model="disabledTab" label="Disabled Tab" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const verticalTab = ref(false)
const boxTab = ref('Tab 1')
const disabledTab = ref(false)
</script>
