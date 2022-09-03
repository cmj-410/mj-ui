# mj-select 选择组件
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined"
/>

## 快捷展示
<mj-select 
  label-top="List of string"
  v-model="exampleStringValue"
  :options="exampleStringOptions"
>
</mj-select>

<script setup>
const exampleStringValue = null 
const exampleStringOptions = ["Test string 1","Test string 2","Test string 3","Test string 4","Test string 5","Test string 6"]
</script>