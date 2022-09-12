import { App } from 'vue'
import Tag from './Tag.vue'

export default {
  Tag,
  install(Vue: App) {
    Vue.component(this.Tag.name, this.Tag)
  },
}
