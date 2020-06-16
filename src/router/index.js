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

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        children: [
            { path: '/home', redirect: '/goods0' },
            { path: '/goods0', component: goods0 }
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