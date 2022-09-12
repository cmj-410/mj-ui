import { App } from 'vue'
import Tabs from './Tabs.vue'

export default {
  Tabs,
  install(Vue: App) {
    Vue.component(this.Tabs.name, this.Tabs)
  },
}
