import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import("../views/Test.vue"),
  },
 
];

const router = new VueRouter({
  routes,
});

export default router;
