export default {
  namespaced: true,
  state: {
    name: 'B的name',
  },
  getters: {
    jsName(state){
      return state.name+'js===========Name'
    }
  },
  actions: {
    bact(context){
      console.log(context,"context");
    }
  },
  mutations: {
   
  }
};
