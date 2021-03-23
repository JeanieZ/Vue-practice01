import vue from 'vue'
import vuex from 'vuex'
const state = {
    currentPlayAudioIndex:0
}
const getters = {}
const actions = {}
const mutations = {
    setCurrentAudioIndex(state,data){
        state.currentPlayAudioIndex = data;
    }
}
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}