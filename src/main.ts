import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import "./index.css";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
  .use(Router)
  .use(pinia)
  .mount("#app");
