import { App } from 'vue'
import Tabs from './Tabs.vue'

Tabs.install = (Vue: App) => {
  Vue.component(Tabs.name, Tabs)
}

export default Tabs
