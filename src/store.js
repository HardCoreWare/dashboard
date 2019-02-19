import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    accounts: [

      { id: 1,

        account: '610104526',
        concept: 'salarios',
        editable: true

      },

      { id: 2,

        account: '610104526',
        concept: 'pagos',
        editable: true

      }

    ]

  },
  mutations: {

  },
  actions: {

  }
})
