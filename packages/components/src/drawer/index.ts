import { App } from 'vue'
import Drawer from './Drawer.vue'

export default {
  Drawer,
  install(Vue: App) {
    Vue.component(this.Drawer.name, this.Drawer)
  },
}
