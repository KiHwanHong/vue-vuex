import Vue from "vue";
import Vuex from "vuex";
// import campaign from '@/store/modules/campaign.js';
import campaign from "@/store/modules/campaign/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    campaign,
  },
});