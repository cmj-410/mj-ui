import { App } from 'vue'
import Tag from './Tag.vue'

Tag.install = (Vue: App) => {
  Vue.component(Tag.name, Tag)
}

export default Tag
