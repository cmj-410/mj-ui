import { App } from 'vue'
import Switch from './Switch.vue'

export default {
  Switch,
  install(Vue: App) {
    Vue.component(this.Switch.name, this.Switch)
  },
}
