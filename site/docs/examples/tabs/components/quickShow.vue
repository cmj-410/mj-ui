<template>
  <show-box title="mj-tabs">
    <template #left>
      <mj-tabs :vertical="verticalTab" :box="boxTab">
        <mj-tab title="Tab 1" :disabled="disabledTab == 'Tab 1'"
          >First tab</mj-tab
        >
        <mj-tab title="Tab 2" :disabled="disabledTab == 'Tab 2'"
          >Second tab</mj-tab
        >
        <mj-tab title="Tab 3" :disabled="disabledTab == 'Tab 3'"
          >Third tab</mj-tab
        >
      </mj-tabs>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-checkbox v-model="verticalTab" label="垂直显示" />
        <mj-checkbox v-model="boxTab" label="盒装" />
        <mj-select
          v-model="disabledTab"
          label-top="禁用某选项卡"
          placeholder="请选择"
          :options="['no', 'Tab 1', 'Tab 2', 'Tab 3']"
        />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const verticalTab = ref(false)
const boxTab = ref('Tab 1')
const disabledTab = ref(null)
</script>
