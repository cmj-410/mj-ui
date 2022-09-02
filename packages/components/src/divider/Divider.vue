<template>
  <div class="mj-divider" :class="{
    'mj-divider--horizontal': !vertical,
    'mj-divider--vertical': vertical,
  }" role="separator"></div>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'mj-divider',
  props: { vertical: { type: Boolean } },
})
</script>
