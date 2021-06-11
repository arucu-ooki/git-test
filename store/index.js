import Vuex from 'vuex'

const state = () => ({
  blog:[]
})

const mutations = {
  setBlog(state, setBlog){
    console.log("test1111",setBlog)

    state.blog = setBlog
  }
}

const actions = {

}

const store = () => new Vuex.Store({
  state,
  mutations,
  actions
})

export default store