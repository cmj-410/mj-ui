# 快速开始

本节将介绍如何在项目中使用 mj-ui。

## 全量引入
``` ts
import { createApp } from "vue";
import App from "./App.vue";
import mjUI from "@tongy-cai/mj-ui";

createApp(App).use(mjUI).mount("#app");
```

## 按需引入
``` ts
import { createApp } from "vue";
import App from "./App.vue";
import { mjAlert } from "@tongy-cai/mj-ui";

createApp(App).use(mjAlert).mount("#app");
```

::: tip
因为mj-ui使用了material icon，因此若需要使用icon请引入以下资源。
:::

``` html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined"
  type="text/css"
/>
```
