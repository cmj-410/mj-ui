import { App } from 'vue'
import Popover from './Popover.vue'

Popover.install = (Vue: App) => {
  Vue.component(Popover.name, Popover)
}

export default Popover
