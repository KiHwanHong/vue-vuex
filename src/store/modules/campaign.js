import Vue from "vue";
import Vuex from "vuex";
import { }from '@/api/campaign.js';

Vue.use(Vuex);

const state = () => ({
  counter: 34,
})

const getters = {
  getCounter(state) {
    console.log("[campaign/geters] getCounter : ", state.counter);
    return state.counter;
  },
}

const mutations = {
  increments(state) {
    state.counter++;
    console.log("[campaing/increments] counter : ", state.counter);
  },
  decrements(state) {
    state.counter--;
    console.log("[campaing/decrements] counter : ", state.counter);
  },
}

const actions = {
  // api 처리할때, 
  plusCounter(context) {
    console.log("========== [campaing/actions/plusCounter] ==========");
    return context.commmit("increments");
  },
  minusCounter(context) {
    console.log("========== [campaing/actions/minusCounter] ==========");
    return context.commmit("decrements");
  },
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}