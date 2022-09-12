import { App } from 'vue'
import Loading from './Loading.vue'

export const mjLoading = Loading

export default {
  Loading,
  install(Vue: App) {
    Vue.component(this.Loading.name, this.Loading)
  },
}
