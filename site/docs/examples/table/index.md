---
layout: page
---

<script setup>
import quickShow from './components/quickShow.vue'
import {tableProps, tableColumnsProps} from './data/propsBody'
</script>

# mj-table 表格组件

## 快捷展示
<quickShow />

## API文档
<props-table descriptType="Table Props" :propsBody="tableProps" />
<props-table descriptType="Table columns Props" :propsBody="tableColumnsProps" />
