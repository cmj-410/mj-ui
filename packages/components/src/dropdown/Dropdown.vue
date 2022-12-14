<template>
  <div v-clickoutside="hidePopover" class="mj-dropdown" v-on="listeners">
    <div ref="trigger" class="mj-dropdown-trigger">
      <slot></slot>
    </div>

    <transition :name="transition">
      <div v-show="show" ref="popover" class="mj-dropdown-slot"
        :class="[placement && `mj-dropdown-slot--${placementSide}`]">
        <slot name="menu"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent, computed } from 'vue'
import { Positions } from '../../models/enums'
import { usePopover } from '../../hooks'
import { clickOutside } from '../../directives'
// import { Positions } from '@models/enums'
// import { usePopover } from '@hooks'
// import { clickOutside } from '@directives'

export default defineComponent({
  name: 'mj-dropdown',
  directives: {
    clickoutside: clickOutside,
  },
  props: {
    placement: {
      default: Positions.B,
      type: String,
      validator: (value: Positions) =>
        Object.values(Positions)
          .includes(value),
    },
    clickable: Boolean,
  },
  setup(props) {
    const {
      show,
      placement,
      disabled,
      popover,
      trigger,
      handleMouseEnter,
      handleMouseLeave,
      hidePopover,
      showPopover,
    } = usePopover(props)

    function toggleDropdown() {
      if (disabled.value) {
        return
      }

      if (show.value) {
        hidePopover()
      } else {
        showPopover()
      }
    }

    const transition = computed(() => `drop-${placement.value}`)
    const placementSide = computed(() => placement.value.split('-')[0])
    const listeners = computed(() => {
      return props.clickable
        ? {
          click: toggleDropdown,
        }
        : {
          mouseenter: handleMouseEnter,
          mouseleave: handleMouseLeave,
        }
    })

    return {
      toggleDropdown,
      transition,
      placementSide,
      listeners,
      show,
      hidePopover,
      placement,
      popover,
      trigger,
    }
  },
})
</script>
