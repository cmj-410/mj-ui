<template>
  <div class="it-button-group" :class="
    vertical ? 'it-button-group--vertical' : 'it-button-group--horizontal'
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
