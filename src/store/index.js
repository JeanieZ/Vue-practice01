import vuex from 'vuex'
import Vue from 'vue'
import homework from './homework/homework'
Vue.use(vuex);
const store = new vuex.Store({
    modules: {
        homework
    }
});
export default store;
