<template>
  <transition name="fade-bottom" @after-leave="destroy">
    <div v-show="show" :style="{ top: `${top}px` }" class="mj-message" :class="[`mj-message--${type}`]"
      @mouseleave="startTimer" @mouseenter="clearTimer">
      <mj-icon class="mj-message-icon" :name="icon || computedIcon" />
      <span class="mj-message-text">{{ text }}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import './styles/index.less'
import { Colors } from '../../models/enums'
import { defineComponent } from 'vue'
import mjIcon from '../icon'

const typeIcon: { [key in Colors]?: string } = {
  [Colors.PRIMARY]: 'info_outline',
  [Colors.SUCCESS]: 'done',
  [Colors.WARNING]: 'error_outline',
  [Colors.DANGER]: 'clear',
}

export default defineComponent({
  name: 'mj-message',
  components: {
    'mj-icon': mjIcon,
  },
  data() {
    return {
      id: null,
      show: false,
      text: '',
      icon: '',
      duration: 4000,
      onClose: () => { },
      top: 6,
      type: Colors.PRIMARY,
      messageTimer: null as any,
    }
  },
  computed: {
    computedIcon(): Colors {
      return typeIcon[this.type] as Colors
    },
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    destroy() {
      this.$el.parentNode!.removeChild(this.$el)
    },

    startTimer() {
      if (this.duration > 0) {
        this.messageTimer = setTimeout(() => {
          this.show = false
          if (this.onClose) {
            this.onClose()
          }
        }, this.duration)
      }
    },

    clearTimer() {
      clearTimeout(this.messageTimer!)
    },
  },
})
</script>
