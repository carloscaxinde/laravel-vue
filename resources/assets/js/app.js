
require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routers'
import store from './vuex/store'

Vue.component('app-component', require('./components/App'))
Vue.component('test-component', require('./components/TestComponent'))

const app = new Vue({
    router,
    store,
    el: '#app'
});
