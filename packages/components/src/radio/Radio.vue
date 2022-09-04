<template>
  <label
    class="mj-radio-wrapper"
    :class="[
      isChecked && `mj-radio-wrapper--${type}--checked`,
      `mj-radio-wrapper--${type}`,
      disabled && 'mj-radio-wrapper--disabled',
    ]"
  >
    <input
      class="mj-radio-input"
      :disabled="disabled"
      type="radio"
      :checked="isChecked"
      :value="modelValue"
      v-bind="$attrs"
      @change="check"
    />
    <span :class="['mj-radio-border', pulse && !disabled && 'pulse']">
      <span class="mj-radio-circle"></span>
    </span>
    <span class="mj-radio-label-group">
      <span
        v-if="label && !$slots.default"
        class="mj-radio-label"
        :class="[disabled && 'mj-radio-label--disabled']"
        >{{ label }}</span
      >
      <span
        v-if="subLabel && !$slots.sublabel"
        class="mj-radio-label mj-radio-label--sub"
        :class="[disabled && 'mj-radio-label--disabled']"
        >{{ subLabel }}</span
      >

      <span
        v-if="$slots.default"
        class="mj-radio-label"
        :class="[disabled && 'mj-radio-label--disabled']"
      >
        <slot></slot>
      </span>
      <span
        v-if="$slots.sublabel"
        class="mj-radio-label mj-radio-label--sub"
        :class="[disabled && 'mj-radio-label--disabled']"
      >
        <slot name="sublabel"></slot>
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import './styles/index.less'
import { Colors } from '../../models/enums'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'mj-radio',
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
    modelValue: {},
    value: {},
  },
  setup(props, { emit }) {
    function check() {
      if (props.disabled) {
        return
      }
      emit('update:modelValue', props.value)
    }

    const isChecked = computed(() => props.modelValue === props.value)
    return { check, isChecked }
  },
})
</script>
