import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/home.vue'
import Classify from '../pages/classify/classify.vue'
import ShowCat from '../pages/showCat/showCat.vue'
import UserCenter from '../pages/userCenter/userCenter.vue'
import Type from '../components/type/type.vue'
import Brand from '../components/brand/brand.vue'
import Login from '../components/login/login.vue'
import Register from '../components/register/register.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:'active',
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/classify',
      component:Classify,
      children:[
        {
          path:'/classify/type',
          component:Type
        },
        {
          path:'/classify/brand',
          component:Brand
        },
        {
          path:'/classify',
          redirect:'/classify/type'
        },
      ]
    },
    {
      path:'/showCat',
      component:ShowCat
    },
    {
      path:'/userCenter',
      component:UserCenter,
      children:[
        {
          path:'/userCenter/login',
          component:Login
        },
        {
          path:'/userCenter/register',
          component:Register
        },
        {
          path:'/userCenter',
          redirect:'/userCenter/login'
        }
      ]
    },
  ]
})
