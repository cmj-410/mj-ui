import { App } from 'vue'
import Popover from './Popover.vue'

export default {
  Popover,
  install(Vue: App) {
    Vue.component(this.Popover.name, this.Popover)
  },
}
