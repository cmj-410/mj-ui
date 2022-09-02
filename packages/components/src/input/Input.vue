<template>
  <div>
    <transition name="fade">
      <div v-show="focus && mask" class="mj-input-mask"></div>
    </transition>
    <span v-if="labelTop" class="mj-input-label">{{ labelTop }}</span>
    <div class="mj-input-prefix-wrapper" :style="{ 'z-index': mask ? 100 : 'auto' }">
      <div v-if="prefix" class="mj-input-prefix">{{ prefix }}</div>
      <div class="mj-input-wrapper" :class="[
        status && `mj-input-wrapper--${status}`,
        disabled && `mj-input-wrapper--disabled`,
      ]">
        <span v-if="prefixIcon" class="mj-input-icon-wrapper">
          <mj-icon class="mj-input-icon" :name="prefixIcon" />
        </span>
        <input v-bind="$attrs" :type="type" class="mj-input" :disabled="disabled" :value="modelValue"
          :placeholder="placeholder" @input="input" @focus="focus = true" @blur="focus = false" />
        <span v-if="suffixIcon" class="mj-input-icon-wrapper">
          <mj-icon class="mj-input-icon" :name="suffixIcon" />
        </span>
      </div>
      <div v-if="suffix" class="mj-input-suffix">{{ suffix }}</div>
    </div>
    <transition name="fade-bottom">
      <span v-if="message" class="mj-input-message" :class="[
        status && `mj-input-message--${status}`,
        disabled && `mj-input-message--disabled`,
      ]">{{ message }}</span>
    </transition>
  </div>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent, ref } from 'vue'
import { Colors } from '../../models/enums'

export default defineComponent({
  name: 'mj-input',
  inheritAttrs: false,
  props: {
    status: {
      type: String,
      validator: (value: Colors) =>
        [Colors.SUCCESS, Colors.WARNING, Colors.DANGER].includes(value),
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    labelTop: String,
    prefix: String,
    suffix: String,
    message: String,
    mask: Boolean,
    suffixIcon: String,
    prefixIcon: String,
    disabled: Boolean,
    modelValue: [String, Number],
  },
  setup(props, { emit }) {
    const focus = ref(false)

    function input(e: Event) {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    return { input, focus }
  },
})
</script>
