<template>
  <svg class="mj-loading" :style="{
    'max-width': `${radius * 2}px`,
    'max-height': `${radius * 2}px`,
  }">
    <circle class="mj-loading-circle" :stroke="color" :stroke-width="stroke" stroke-linecap="round" fill="none"
      :r="normalizedRadius" :cx="radius" :cy="radius" pathLength="100" />
  </svg>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'mj-loading',
  props: {
    stroke: { default: 6, type: Number },
    radius: { default: 32, type: Number },
    color: { default: '#3051ff', type: String },
  },
  setup(props) {
    const normalizedRadius = computed(() => props.radius - props.stroke / 2)

    return { normalizedRadius }
  },
})
</script>
