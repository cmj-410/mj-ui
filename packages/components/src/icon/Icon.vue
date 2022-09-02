<template>
  <i class="material-icons mj-icon" :class="[outlined && 'material-icons-outlined', box && 'mj-icon--box']" :style="{
    color,
    'background-color': box && boxColor ? boxColor : '',
  }">
    <slot>{{ name ? name : '' }}</slot>
  </i>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'mj-icon',
  props: {
    name: { type: String, required: true },
    color: { type: String, default: null },
    outlined: { type: Boolean, default: false },
    box: { type: Boolean, default: false },
    boxColor: { type: String, default: null },
  },
})
</script>
