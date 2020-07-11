import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from "./store";
import router from './router/index.js'
import moment from "moment";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuex);
Vue.use(moment);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
