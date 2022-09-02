<template>
  <div class="mj-button-group" :class="
    vertical ? 'mj-button-group--vertical' : 'mj-button-group--horizontal'
  ">
    <slot />
  </div>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'mj-button-group',
  props: {
    vertical: { type: Boolean },
  },
})
</script>
