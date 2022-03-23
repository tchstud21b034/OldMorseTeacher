import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Translate from "../views/Translate.vue"
import Learn from "../views/Learn.vue"
import Practice from "../views/Practice.vue"
import Test from "../views/Test.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/translate",
    name: "translate",
    component: Translate,
  },
  {
    path: "/learn",
    name: "learn",
    component: Learn,
  },
  {
    path: "/read",
    name: "practice",
    component: Practice,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
