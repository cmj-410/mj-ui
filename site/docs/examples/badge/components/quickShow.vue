<template>
  <show-box title="mj-badge">
    <template #left>
      <mj-badge
        :value="badgeValue"
        :show="badgeShow"
        :type="badgeType"
        :max-value="badgeMax"
        :point="badgePoint"
        :square="badgeSquare"
        :position="badgePosition"
      >
        <mj-button>Badged</mj-button>
      </mj-badge>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-select
          v-model="badgeType"
          placeholder="请选择"
          label-top="徽标的类型"
          :options="badgeTypes"
        />
        <div>
          <mj-select
            v-model="badgePosition"
            placeholder="请选择"
            label-top="徽标的位置"
            :options="badgePositions"
          />
        </div>
        <mj-checkbox v-model="badgePoint" label="点状" />
        <mj-checkbox v-model="badgeSquare" label="方形" />
        <mj-checkbox v-model="badgeShow" label="显示" />
        <mj-number-input v-model="badgeMax" label-top="最大值" />
        <mj-number-input v-model="badgeValue" label-top="徽标的值" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const badgeValue = ref(88)
const badgePoint = ref(false)
const badgeSquare = ref(false)
const badgeShow = ref(true)
const badgeMax = ref(999)
const badgeType = ref('danger')
const badgeTypes = ['primary', 'success', 'danger', 'warning']

const badgePosition = ref('top-right')
const badgePositions = ['top-right', 'top-left', 'bottom-right', 'bottom-left']
</script>
