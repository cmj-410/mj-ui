import { App } from 'vue'
import Radio from './Radio.vue'

export default {
  Radio,
  install(Vue: App) {
    Vue.component(this.Radio.name, this.Radio)
  },
}
