import { createApp } from "vue";
import App from "./app.vue";
const app = createApp(App);
import mjUI from "mj-ui";
app.use(mjUI);
app.mount("#app");
