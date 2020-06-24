import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import toast from './components/common/toast/index'
import Router from 'vue-router'
import './assets/icon/iconfont.js'
Vue.prototype.$http = axios

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import './plugin/vant'
Vue.config.productionTip = false

require('./mock/mock')
    // 安装toast插件
Vue.use(toast)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')