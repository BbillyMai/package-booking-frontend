import Vue from 'vue'
import Vuex from 'vuex'

import Actions from './store/actions'
import Mutations from './store/Mutations'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    orders:[],
    flag:"ALL"
  },
  mutations : Mutations,
  actions: Actions

})
