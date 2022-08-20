import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: { countTime: 0 },
  getters: {
    countTime: (state) => {
      return state.countTime;
    },
  },
  mutations: {
    countTime(state, value) {
      state.countTime = value;
    },
  },
  actions: {
    countTime(context, value) {
      context.commit("countTime", value);
    },
  },
  modules: {},
});
