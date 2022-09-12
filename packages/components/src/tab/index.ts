import { App } from 'vue'
import Tab from './Tab.vue'

export default {
  Tab,
  install(Vue: App) {
    Vue.component(this.Tab.name, this.Tab)
  },
}
