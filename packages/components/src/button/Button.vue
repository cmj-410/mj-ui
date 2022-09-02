<template>
  <button class="mj-btn" :class="rootClasses" :disabled="disabled">
    <mj-icon v-if="icon" class="mj-btn-icon" :name="icon" />
    <span v-if="$slots.default" class="mj-btn-text">
      <slot />
    </span>
    <span class="mj-btn-wrap-loading">
      <mj-loading v-if="loading" color="#fff" :radius="10" :stroke="3" />
    </span>
  </button>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent, computed } from 'vue'
import mjIcon from '../icon'
import mjLoading from '../loading'
import { Sizes, Colors } from '../../models/enums'
// import { Sizes, Colors } from '@models/enums'

export default defineComponent({
  name: 'mj-button',
  components: {
    mjIcon,
    mjLoading,
  },
  props: {
    type: {
      type: String,
      default: Colors.NEUTRAL,
      validator: (value: Colors) => Object.values(Colors).includes(value),
    },
    size: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value: Sizes) => Object.values(Sizes).includes(value),
    },
    iconAfter: { type: Boolean },
    disabled: { type: Boolean },
    outlined: { type: Boolean },
    round: { type: Boolean },
    pulse: { type: Boolean },
    loading: { type: Boolean },
    block: { type: Boolean },
    text: { type: Boolean },
    icon: { type: String, default: null },
  },
  setup(props, { slots }) {
    const rootClasses = computed(() => [
      {
        pulse: props.pulse,
        'mj-btn--empty': !slots.default,
        'mj-btn--outlined': props.outlined,
        'mj-btn--round': props.round,
        'mj-btn--block': props.block,
        'mj-btn--text': props.text,
        'mj-btn--loading': props.loading,
        [`mj-btn--${props.size}`]: props.size,
        ...(props.type
          ? { [`mj-btn--${props.type}`]: true }
          : { 'mj-btn--neutral': true }),
        ...(props.icon
          ? {
            [props.iconAfter ? 'mj-btn--icon-right' : 'mj-btn--icon-left']:
              true,
          }
          : null),
      },
    ])
    return { rootClasses }
  },
})
</script>
