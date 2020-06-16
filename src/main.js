import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Router from 'vue-router'
Vue.prototype.$http = axios

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import './plugin/vant'
Vue.config.productionTip = false
require('./mock/mock')


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')