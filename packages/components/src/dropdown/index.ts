import Dropdown from "./Dropdown.vue";
import DropdownMenu from "./DropdownMenu.vue";
import DropdownItem from "./DropdownItem.vue";
import { App } from "vue";

const dropdown = {
  Dropdown,
  DropdownMenu,
  DropdownItem,
};

for (const elem in dropdown) {
  if (dropdown.hasOwnProperty(elem)) {
    // @ts-ignore
    const element = dropdown[elem];
    element.install = (Vue: App) => {
      Vue.component(element.name, element);
    };
  }
}

export default dropdown;
