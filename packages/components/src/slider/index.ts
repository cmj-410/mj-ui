import { App } from 'vue'
import Slider from './Slider.vue'

export default {
  Slider,
  install(Vue: App) {
    Vue.component(this.Slider.name, this.Slider)
  },
}
