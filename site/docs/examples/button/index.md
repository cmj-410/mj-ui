<style scoped>
</style>

# mj-button 按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div>
    <div>
        <mj-button>hh</mj-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <mj-button>hh</mj-button>
  </div>
</template>
<script lang="ts" setup>
import { mj-button } from "mj-ui";
</script>
```

</details>

## 禁用状态

<div class="example">
    <div>
        <k-button disabled>禁用按钮</k-button>
        <k-button type="primary" disabled>主要按钮</k-button>
        <k-button type="success" disabled>成功按钮</k-button>
        <k-button type="info" disabled>信息按钮</k-button>
        <k-button type="warning" disabled>警告按钮</k-button>
        <k-button type="danger" disabled>危险按钮</k-button>
        <br>
        <br>
        <k-button disabled>禁用按钮</k-button>
        <k-button type="primary" disabled plain>主要按钮</k-button>
        <k-button type="success" disabled plain>成功按钮</k-button>
        <k-button type="info" disabled plain>信息按钮</k-button>
        <k-button type="warning" disabled plain>警告按钮</k-button>
        <k-button type="danger" disabled plain>危险按钮</k-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <k-button disabled>禁用按钮</k-button>
    <k-button type="primary" disabled>主要按钮</k-button>
    <k-button type="success" disabled>成功按钮</k-button>
    <k-button type="info" disabled>信息按钮</k-button>
    <k-button type="warning" disabled>警告按钮</k-button>
    <k-button type="danger" disabled>危险按钮</k-button>
    <br />
    <br />
    <k-button disabled>禁用按钮</k-button>
    <k-button type="primary" disabled plain>主要按钮</k-button>
    <k-button type="success" disabled plain>成功按钮</k-button>
    <k-button type="info" disabled plain>信息按钮</k-button>
    <k-button type="warning" disabled plain>警告按钮</k-button>
    <k-button type="danger" disabled plain>危险按钮</k-button>
  </div>
</template>
<script lang="ts" setup>
import { mj-button } from "mj-ui";
</script>
<style>
.k-k-button {
  margin-right: 10px;
}
</style>
```

</details>

## 调整尺寸

<div class="example">
    <div>
        <k-button>默认按钮</k-button>
        <k-button size="medium">中等按钮</k-button>
        <k-button size="small">小型按钮</k-button>
        <k-button size="mini">超小按钮</k-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <k-button>默认按钮</k-button>
    <k-button size="medium">中等按钮</k-button>
    <k-button size="small">小型按钮</k-button>
    <k-button size="mini">超小按钮</k-button>
  </div>
</template>
<script lang="ts" setup>
import { k-button } from "kitty-ui";
</script>
<style>
.k-k-button {
  margin-right: 10px;
}
</style>
```

</details>
