<template>
  <li class="mj-dropdown-item" :class="[
    disabled && 'mj-dropdown-item--disabled',
    divided && 'mj-dropdown-item--divided',
  ]">
    <mj-icon v-if="icon" class="mj-dropdown-icon" :name="icon"></mj-icon>
    <span class="mj-dropdown-text">
      <slot></slot>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'mj-dropdown-item',
  props: {
    disabled: Boolean,
    divided: Boolean,
    icon: String,
  },
})
</script>
