import { createRouter, createWebHistory } from "vue-router";

import Auth from "../views/Auth.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("../views/Home.vue") 
    },
    {
      path: "/",
      component: Auth
    }
  ]
});
