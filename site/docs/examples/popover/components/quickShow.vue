<template>
  <show-box title="mj-popover">
    <template #left>
      <mj-popover
        :disabled="isdisabled"
        :placement="popoverPlacement"
        :borderless="isBorderless"
      >
        <mj-button>删除</mj-button>
        <template #content>
          <div>
            <p class="clearMargin">确认删除？</p>
            <div class="justify-end">
              <mj-button size="small">取消</mj-button>
              <mj-button
                size="small"
                type="danger"
                @click="
                  () => {
                    isdisabled = true
                    $Message.success({ text: 'Deleted' })
                  }
                "
                >确认</mj-button
              >
            </div>
          </div>
        </template>
      </mj-popover>
    </template>
    <template #right>
      <span class="showBoxMarginBotm">
        <mj-select
          v-model="popoverPlacement"
          placeholder="请选择"
          label-top="位置"
          :options="placementOptions"
        />
        <mj-checkbox v-model="isdisabled" label="是否关闭" />
        <mj-checkbox v-model="isBorderless" label="去除内部padding" />
      </span>
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ALLOWED_POSITION } from '../data/constants'

const isdisabled = ref(false)
const popoverPlacement = ref('top')
const isBorderless = ref(false)

const placementOptions = ALLOWED_POSITION
</script>

<style lang="less" scoped>
.clearMargin {
  margin: 0;
}
.justify-end {
  display: flex;
  justify-content: flex-end;
  button {
    margin-left: 10px;
  }
}
</style>
