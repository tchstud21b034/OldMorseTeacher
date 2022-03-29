import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Router from "vue-router";
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowsUpDown);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Donut);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
