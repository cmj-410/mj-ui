import { App } from 'vue'
import Tooltip from './Tooltip.vue'

export default {
  Tooltip,
  install(Vue: App) {
    Vue.component(this.Tooltip.name, this.Tooltip)
  },
}
