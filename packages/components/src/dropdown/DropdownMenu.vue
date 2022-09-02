<template>
  <ul class="it-dropdown-menu">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'mj-dropdown-menu',
})
</script>
