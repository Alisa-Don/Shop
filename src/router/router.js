import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "index",
    path: "/index",
    component: () => import("@/views/index.vue"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
