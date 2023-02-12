import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import store from "./store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "element-plus/dist/index.css";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}



app.use(router);
app.use(ElementPlus);
app.use(store);
app.use(VueAxios, axios);

app.mount("#app");
