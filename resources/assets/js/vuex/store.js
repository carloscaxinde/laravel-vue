import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Categories from './modules/categories/categories'

const store = new Vuex.Store({
    modules: {
        categories: Categories
    }
})

export default store

