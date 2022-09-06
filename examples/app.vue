<template>
  <h1>1.按钮测试</h1>
  <h3>1.1按钮的type属性和按钮组</h3>
  <mj-button-group>
    <mj-button
      :type="typeColor"
      v-for="typeColor in colorList"
      :key="typeColor"
    >
      {{ typeColor }}
    </mj-button>
  </mj-button-group>
  <h3>1.2按钮的size属性</h3>
  <div class="showBtn">
    <mj-button
      type="primary"
      :size="theSize"
      v-for="theSize in sizeList"
      :key="theSize"
      >{{ theSize }}</mj-button
    >
  </div>
  <h3>1.3按钮的icon设置</h3>
  <div class="showBtn">
    <mj-button icon="home">home</mj-button>
    <mj-button icon="boy" :iconAfter="true">boy</mj-button>
  </div>
  <h3>1.4按钮的其他属性</h3>
  <div class="showBtn">
    <mj-button :loading="true">loading</mj-button>
    <mj-button type="primary">primary</mj-button>
    <mj-button :outlined="true" type="primary">outlined</mj-button>
    <mj-button :pulse="true">pulse</mj-button>
    <mj-button :disabled="true">disabled</mj-button>
  </div>
  <h1>2.警示测试</h1>
  <h3>2.1警示的type属性</h3>
  <div>
    <mj-alert
      :type="typeColor"
      :title="'title--' + typeColor"
      :closable="true"
      v-for="typeColor in smallColorList"
      :key="typeColor"
      >{{ typeColor }}
    </mj-alert>
  </div>
  <h1>3.checkBox测试</h1>
  <h3>2.1警示的type属性</h3>
  <mj-checkbox v-model="value1">{{ value1 }}</mj-checkbox>
  <h1>4.divider测试</h1>
  <h3>4.1竖向分割线：</h3>
  <span>
    <span>A</span>
    <mj-divider :vertical="true" />
    <span>B</span>
  </span>
  <h3>4.2横向分割线：</h3>
  <div>1212</div>
  <mj-divider></mj-divider>
  <div>3434</div>
  <h1>5.dropDown测试</h1>
  <mj-dropdown placement="right">
    <mj-button>Hover me</mj-button>
    <template #menu>
      <mj-dropdown-menu>
        <mj-dropdown-item>Hello</mj-dropdown-item>
        <mj-dropdown-item disabled>Disabled</mj-dropdown-item>
        <mj-dropdown-item icon="cloud">Cloud</mj-dropdown-item>
        <mj-dropdown-item divided>Divided</mj-dropdown-item>
      </mj-dropdown-menu>
    </template>
  </mj-dropdown>
  <h1>6.input测试</h1>
  <mj-input
    placeholder="placeholder"
    labelTop="labelTop"
    prefixIcon="lock"
  ></mj-input>
  <h1>7.message测试</h1>
  <mj-button @click="$Message({ duration: 5000, text: 'I have 5000ms left' })"
    >Primary message</mj-button
  >
  <mj-button @click="showMessage('success')" type="success"
    >Success message</mj-button
  >
  <mj-button @click="showMessage('danger')" type="danger"
    >Danger message</mj-button
  >
  <mj-button @click="showMessage('warning')" type="warning"
    >Warning message</mj-button
  >
  <h1>8.textArea测试</h1>
  <mj-textarea v-model="textAreaValue" />
  <h1>9.radio测试</h1>
  <mj-radio v-model="radioValue" label="a" value="value: a" />
  <mj-radio v-model="radioValue" label="b" value="value: b" />
  <div>{{ radioValue }}</div>
  <h1>10. toggle测试</h1>
  <mj-toggle v-model="toggleValue" :options="['Amkkkmk', 'B', 'C']" />
  {{ toggleValue }}
  <h1>11. tag测试</h1>
  <mj-tag type="primary" :filled="false">admin</mj-tag>
  <mj-tag type="primary" :filled="true" :closable="true" @close="clickTagClose"
    >vip</mj-tag
  >
  <h1>12. switch 测试</h1>
  <mj-switch type="primary" v-model="switchValue" label="开启" />
  <h1>13. tooltip 测试</h1>
  <mj-tooltip content="显示一些tip信息" placement="right">
    ----------<span>hover 我</span>--------
  </mj-tooltip>
  <h1>14. popover测试</h1>
  <mj-popover :disabled="removed">
    <mj-button>Delete</mj-button>
    <template #content>
      <div>
        <p style="margin-bottom: 8px">Please confirm deletion</p>
        <div style="display: flex; justify-content: flex-end">
          <mj-button size="small">No</mj-button>
          <mj-button
            style="margin-left: 8px"
            size="small"
            type="danger"
            @click="
              () => {
                removed = true
                $Message.success({ text: 'Deleted' })
              }
            "
            >Yes</mj-button
          >
        </div>
      </div>
    </template>
  </mj-popover>
  <h1>15. tabs测试</h1>
  <mj-tabs style="flex: 1">
    <mj-tab title="Tab 1"><h3>First tab</h3></mj-tab>
    <mj-tab title="Tab 2">Second tab</mj-tab>
    <mj-tab title="Tab 3" :disabled="disabledTab">Third tab</mj-tab>
  </mj-tabs>
  <h1>16. drawer测试</h1>
  <mj-button type="primary" @click="switchDrawer = true">打开抽屉</mj-button>
  <mj-drawer v-model="switchDrawer" placement="left">
    <h3>抽屉内容</h3>
  </mj-drawer>
  <br />
  <br />
  <br />
</template>
<script lang="ts" setup>
import { Colors, Sizes } from './enums'
import { ref } from 'vue'

const colorList = Object.values(Colors)
const smallColorList = colorList.filter(
  (val) => val != 'neutral' && val != 'black'
)

const sizeList = Object.values(Sizes)

const value1 = ref(false)

const textAreaValue = ref('123')

const radioValue = ref(null)

const toggleValue = ref('choose this')

const clickTagClose = () => {
  alert('点击了close')
}

const switchValue = ref(false)

const removed = ref(false)

const disabledTab = ref(false)

// const signinModal = ref(false)
// const signincheckbox = ref(null)

const switchDrawer = ref(false)
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    showMessage(type: string) {
      switch (type) {
        case 'success':
          this.$Message.success({ text: 'Success message!' })
          break
        case 'danger':
          this.$Message.danger({ text: 'Danger message!' })
          break
        case 'warning':
          this.$Message.warning({ text: 'Warning message!' })
          break
        default:
          this.$Message({ text: 'Primary message!' })
          break
      }
    },
  },
})
</script>
<style lang="less" scoped>
.showBtn {
  display: flex;
  justify-content: center;
  align-items: flex-end;

  button {
    margin-right: 10px;
  }
}
</style>
