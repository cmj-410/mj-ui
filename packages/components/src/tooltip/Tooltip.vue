<template>
  <div class="mj-tooltip">
    <span
      ref="trigger"
      class="mj-tooltip-trigger"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <slot></slot>
    </span>

    <transition :name="transition">
      <div
        v-show="show"
        ref="popover"
        class="mj-tooltip-popper"
        :class="[placement && `mj-tooltip--${placement.split('-')[0]}`]"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div class="mj-tooltip-content">
          <slot name="content">
            <div>{{ content }}</div>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent, onMounted } from 'vue'
import { usePopover } from '../../hooks'
import { Positions } from '../../models/enums'

export default defineComponent({
  name: 'mj-tooltip',
  props: {
    content: [String, Number],
    disabled: Boolean,
    placement: {
      type: String,
      default: Positions.T,
      validator: (value: Positions) => Object.values(Positions).includes(value),
    },
    permanent: Boolean,
    autoposition: { type: Boolean, default: true },
  },
  setup(props) {
    const {
      show,
      placement,
      disabled,
      clickable,
      transition,
      visionTimer,
      popover,
      trigger,
      permanent,
      position,
      handleMouseEnter,
      handleMouseLeave,
      hidePopover,
      showPopover,
      setPopoverPosition,
    } = usePopover(props)

    onMounted(() => {
      if (permanent.value) {
        showPopover()
      }
    })

    return {
      show,
      placement,
      disabled,
      clickable,
      transition,
      visionTimer,
      popover,
      trigger,
      position,
      handleMouseEnter,
      handleMouseLeave,
      hidePopover,
      showPopover,
      setPopoverPosition,
    }
  },
})
</script>
