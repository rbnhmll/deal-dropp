import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchResults: [],
    watchItems: [],
  },
  getters: {},
  mutations: {},
});

export default store;
