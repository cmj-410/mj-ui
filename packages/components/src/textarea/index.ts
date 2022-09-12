import { App } from 'vue'
import Textarea from './Textarea.vue'

export default {
  Textarea,
  install(Vue: App) {
    Vue.component(this.Textarea.name, this.Textarea)
  },
}
