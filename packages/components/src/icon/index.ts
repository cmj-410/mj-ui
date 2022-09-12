import { App } from 'vue'
import Icon from './Icon.vue'

export const mjIcon = Icon

export default {
  Icon,
  install(Vue: App) {
    Vue.component(this.Icon.name, this.Icon)
  },
}
