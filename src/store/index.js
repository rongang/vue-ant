import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        countSqrt: (state) => {
            return Math.sqrt(state.count)
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        add(state, num) {
            state.count += num;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    }
})
export default store