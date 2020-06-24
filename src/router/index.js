import Vue from 'vue'
import VueRouter from 'vue-router'



const Home = () =>
    import ('../views/Home/home.vue');
const Category = () =>
    import ('../views/Category/category.vue');
const shopCar = () =>
    import ('../views/shopCar/shopCar.vue');
const Profile = () =>
    import ('../views/Profile/profile.vue');

const goods0 = () =>
    import ('../views/Home/HomeChildren/goods0.vue');

const goods1 = () =>
    import ('../views/Home/HomeChildren/goods1.vue');
const goods2 = () =>
    import ('../views/Home/HomeChildren/goods2.vue');
const goods3 = () =>
    import ('../views/Home/HomeChildren/goods3.vue');
const goods4 = () =>
    import ('../views/Home/HomeChildren/goods4.vue');
const goods5 = () =>
    import ('../views/Home/HomeChildren/goods5.vue')
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        children: [
            { path: '/home', redirect: '/home/goods0' },
            { path: 'goods0', component: goods0 },
            { path: 'goods1', component: goods1 },
            { path: 'goods2', component: goods2 },
            { path: 'goods3', component: goods3 },
            { path: 'goods4', component: goods4 },
            { path: 'goods5', component: goods5 }
        ]
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopCar',
        component: shopCar
    },
    {
        path: '/profile',
        component: Profile
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})



export default router