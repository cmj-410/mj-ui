import { App } from 'vue'
import Badge from './Badge.vue'

export default {
  Badge,
  install(Vue: App) {
    Vue.component(this.Badge.name, this.Badge)
  },
}
