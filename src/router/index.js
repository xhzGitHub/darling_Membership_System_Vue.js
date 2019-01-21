import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login/Login'
import Userinfo from '../pages/userinfo/Userinfo'
import Home from '../pages/home/Home'
import Bodytypeinfo from '../pages/bodytypeinfo/Bodytypeinfo'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/userinfo',
      component: Userinfo
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/bodytypeinfo',
      component: Bodytypeinfo
    },
  ],
  mode: 'history',
})
