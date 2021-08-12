import {createRouter, createWebHistory} from 'vue-router'

import PrizeDetail from '../views/PrizeDetail'
import Home from '../views/Home'
import Register from '../views/Register'
import Login from '../views/Login'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/prize/:id',
        name: 'PrizeDetail',
        component: PrizeDetail
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router