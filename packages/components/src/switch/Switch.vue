<template>
  <label class="mj-switch-wrapper">
    <span
      class="mj-switch"
      :class="[
        `mj-switch--${type}`,
        modelValue && `mj-switch--${type}--checked`,
        disabled && `mj-switch--${type}--disabled`,
        pulse && !disabled && 'pulse',
      ]"
    >
      <input
        type="checkbox"
        class="mj-switch-input"
        :disabled="disabled"
        style="z-index: 10"
        v-bind="$attrs"
        @change="toggle"
      />
      <span class="mj-switch-circle"></span>
    </span>
    <span class="mj-switch-label-group">
      <span
        v-if="label && !$slots.default"
        class="mj-switch-label"
        :class="[disabled && 'mj-switch-label--disabled']"
        >{{ label }}</span
      >
      <span
        v-if="subLabel && !$slots.sublabel"
        class="mj-switch-label mj-switch-label--sub"
        :class="[disabled && 'mj-switch-label--disabled']"
        >{{ subLabel }}</span
      >

      <span
        v-if="$slots.default"
        class="mj-switch-label"
        :class="[disabled && 'mj-switch-label--disabled']"
        ><slot></slot
      ></span>
      <span
        v-if="$slots.sublabel"
        class="mj-switch-label mj-switch-label--sub"
        :class="[disabled && 'mj-switch-label--disabled']"
        ><slot name="sublabel"></slot
      ></span>
    </span>
  </label>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent } from 'vue'
import { Colors } from '../../models/enums'

export default defineComponent({
  name: 'mj-switch',
  inheritAttrs: false,
  props: {
    type: {
      default: Colors.PRIMARY,
      type: String,
      validator: (value: Colors) =>
        [
          Colors.PRIMARY,
          Colors.SUCCESS,
          Colors.DANGER,
          Colors.WARNING,
        ].includes(value),
    },
    label: { type: String },
    subLabel: { type: String },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    modelValue: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    function toggle() {
      if (props.disabled) {
        return
      }
      const newValue = !props.modelValue
      emit('update:modelValue', newValue)
    }

    return { toggle }
  },
})
</script>
