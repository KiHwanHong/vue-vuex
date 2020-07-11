import Vue from "vue";
import Vuex from "vuex";

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
      counter: 3454,
      weight: 2,
      num: 0,
    },
    mutations,
    actions,
    getters
}