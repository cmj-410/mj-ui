import { App } from 'vue'
import Tooltip from './Tooltip.vue'

Tooltip.install = (Vue: App) => {
  Vue.component(Tooltip.name, Tooltip)
}

export default Tooltip
