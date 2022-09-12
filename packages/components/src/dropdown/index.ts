import Dropdown from './Dropdown.vue'
import DropdownMenu from './DropdownMenu.vue'
import DropdownItem from './DropdownItem.vue'
import { App } from 'vue'

const dropdown = [Dropdown, DropdownMenu, DropdownItem]

export const mjDropdown = {
  Dropdown,
  install(Vue: App) {
    Vue.component(this.Dropdown.name, this.Dropdown)
  },
}
export const mjDropdownMenu = {
  DropdownMenu,
  install(Vue: App) {
    Vue.component(this.DropdownMenu.name, this.DropdownMenu)
  },
}
export const mjDropdownItem = {
  DropdownItem,
  install(Vue: App) {
    Vue.component(this.DropdownItem.name, this.DropdownItem)
  },
}

export default {
  dropdown,
  install(Vue: App) {
    for (const elem of dropdown) {
      Vue.component(elem.name, elem)
    }
  },
}
