import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// Vue.config.debug = true
// const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  state: {
    count: 0,
    // todos: [
    //   { id: 1, text: '...', done: true },
    //   { id: 2, text: '...', done: false },
    // ],
    currentPage: 'Home',
    langCode: 'en',
  },
  // getters: {
  //   doneTodos: function doneTodos(state) {
  //     return state.todos.filter(todo => todo.done);
  //   },
  //   doneTodosCount: function doneTodosCount(state, getters) {
  //     return getters.doneTodos.length;
  //   },
  // },
  mutations: {
    // increment(state, payload) {
    //   state.count += payload.amount;
    // },
    changeLang(state, payload) {
      state.langCode = payload.selectLang;
      Vue.config.lang = state.langCode;
    },
    changePage(state, payload) {
      state.currentPage = payload.currentPage;
    },
  },
  // actions: {
  //   changePage(context) {
  //     context.commit('changePage');
  //   },
  // },
});

export default store;
