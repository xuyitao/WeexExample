import Vue from 'vue'
import Vuex from 'vuex'

import * as types from '../mutation-types'

const state = {
  count: 0
}


const mutations = {
    [types.Counter_Increment] (state) {
        state.count++
    },

    [types.Counter_Decrement] (state) {
        state.count--
    }
}

const actions = {
    increment ({commit}) {
        commit(types.Counter_Increment)
    },
    decrement ({commit}) {
        commit(types.Counter_Decrement)
    },
    incrementIfOdd ({ commit, state }) {
      if ((state.count + 1) % 2 === 0) {
        commit(types.Counter_Increment)
      }
    },
    incrementAsync ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit(types.Counter_Increment)
          resolve()
        }, 1000)
      })
    }
}

const getters = {
    evenOrOdd : state => state.count % 2 === 0 ? 'even':'odd',
    getCount : state=> state.count
}

export default {
    state,
    getters,
    actions,
    mutations
}
