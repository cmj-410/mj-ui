import { App } from 'vue'
import Switch from './Switch.vue'

Switch.install = (Vue: App) => {
  Vue.component(Switch.name, Switch)
}

export default Switch
