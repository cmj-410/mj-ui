import { App } from 'vue'
import Drawer from './Drawer.vue'

Drawer.install = (Vue: App) => {
  Vue.component(Drawer.name, Drawer)
}

export default Drawer
