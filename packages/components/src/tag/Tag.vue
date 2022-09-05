<template>
  <span
    :class="[
      'mj-tag',
      type && `mj-tag--${type}`,
      filled && `mj-tag--${type}--filled`,
    ]"
  >
    <slot></slot>
    <mj-icon v-if="closable" name="clear" class="mj-tag-close" @click="close" />
  </span>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent } from 'vue'
import { Colors } from '../../models/enums'

export default defineComponent({
  name: 'mj-tag',
  props: {
    type: {
      default: Colors.NEUTRAL,
      validator: (value: Colors) =>
        [
          Colors.PRIMARY,
          Colors.SUCCESS,
          Colors.DANGER,
          Colors.WARNING,
          Colors.NEUTRAL,
        ].includes(value),
    },
    closable: { type: Boolean },
    filled: { type: Boolean },
  },
  emits: ['close'],
  setup(props, { emit }) {
    function close() {
      if (!props.closable) {
        return
      }
      emit('close')
    }

    return { close }
  },
})
</script>
