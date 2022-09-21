import { App } from 'vue'
import Table from './Table.vue'

export default {
  Table,
  install(Vue: App) {
    Vue.component(this.Table.name, this.Table)
  },
}
