import { App } from 'vue'
import Divider from './Divider.vue'

export default {
  Divider,
  install(Vue: App) {
    Vue.component(this.Divider.name, this.Divider)
  },
}
