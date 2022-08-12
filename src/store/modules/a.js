export default {
  namespaced: true,
  state: {
    user: '张三',
    permissions: null,
    roles: null,
    routesConfig: null
  },
  getters: {
    jsUser(state){
      return state.user+'js==========='
    }
  },
  actions: {
    actionsChange({ state }) {
      // commit("setUser", state.user);
      state.user = '李四'
    }
  },
  mutations: {
    mutationsChange(state, user) {
      state.user = user.user;
      // localStorage.setItem(process.env.VUE_APP_USER_KEY, JSON.stringify(user))
    }
  }
};
