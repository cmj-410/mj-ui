<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined"
/>

<script setup>
import quickShow from './components/quickShow.vue'
import typesVue from './components/types.vue'
import buttonGroup from './components/buttonGroup.vue'
import propsBody from './data/propsBody'
</script>

# mj-button 按钮组件

## 快捷展示
<quickShow />

## 按钮类型
<show-block>
  <typesVue />
</show-block>

<details>
<summary>查看代码</summary>

<<< @/examples/button/components/types.vue

</details>

## 按钮组
<show-block :vertical="true">
  <buttonGroup />
</show-block>

<details>
<summary>查看代码</summary>

<<< @/examples/button/components/buttonGroup.vue

</details>

## API文档
<props-table descriptType="Props" :propsBody="propsBody" />


