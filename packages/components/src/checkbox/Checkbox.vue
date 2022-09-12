<template>
  <label class="mj-checkbox-wrapper">
    <span
      class="mj-checkbox-check-wrapper"
      :class="[pulse && !disabled && 'pulse']"
    >
      <input
        type="checkbox"
        v-bind="$attrs"
        class="mj-checkbox-input"
        :disabled="disabled"
        @change="toggle"
      />
      <span
        class="mj-checkbox"
        :class="[
          `mj-checkbox--${type}`,
          modelValue && `mj-checkbox--${type}--checked`,
          disabled && 'mj-checkbox--disabled',
        ]"
      >
        <mj-icon style="font-size: 16px" :name="icon" />
      </span>
    </span>
    <span class="mj-checkbox-label-group">
      <span
        v-if="label && !$slots.default"
        class="mj-checkbox-label"
        :class="[
          lineThrough && modelValue && 'mj-checkbox-label--linethrough',
          disabled && 'mj-checkbox-label--disabled',
        ]"
        >{{ label }}</span
      >
      <span
        v-if="subLabel && !$slots.sublabel"
        class="mj-checkbox-label mj-checkbox-label--sub"
        :class="[disabled && 'mj-checkbox-label--disabled']"
        >{{ subLabel }}</span
      >

      <span
        v-if="$slots.default"
        class="mj-checkbox-label"
        :class="[
          lineThrough && modelValue && 'mj-checkbox-label--linethrough',
          disabled && 'mj-checkbox-label--disabled',
        ]"
      >
        <slot></slot>
      </span>
      <span
        v-if="$slots.sublabel"
        class="mj-checkbox-label mj-checkbox-label--sub"
        :class="[disabled && 'mj-checkbox-label--disabled']"
      >
        <slot name="sublabel"></slot>
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent } from 'vue'
import { Colors } from '../../models/enums'

export default defineComponent({
  name: 'mj-checkbox',
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
          Colors.NEUTRAL,
        ].includes(value),
    },
    label: { type: String },
    subLabel: { type: String },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    lineThrough: { type: Boolean },
    icon: { type: String, default: 'check' },
    color: { type: String },
    modelValue: {},
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
