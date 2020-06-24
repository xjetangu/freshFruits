import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shopList: [],
        bottomChecked: false

    },
    mutations: {
        AddCounter(state, payload) {
            payload.count++
        },
        AddToCart(state, payload) {
            payload.checked = true
            state.shopList.push(payload)
        },
        listBotton(state, payload) {
            payload.checked = !payload.checked;


        }

    },
    getters: {
        shopCarsList(state) {
            return state.shopList
        },

    },

    actions: {
        pushShopList(context, payload) {
            return new Promise((resolve, reject) => {
                let product = context.state.shopList.find(item => item.id === payload.id)
                if (product) {
                    context.commit('AddCounter', product)
                    resolve('当前商品数量加1')

                } else {
                    payload.count = 1;
                    context.commit('AddToCart', payload)
                    resolve('添加商品成功')
                }
            })

        },
        changeChecked(context, payload) {
            let pro1 = context.state.shopList.find(item => item.id === payload.id)
            context.commit('listBotton', pro1)



        }

    },
    modules: {}
})