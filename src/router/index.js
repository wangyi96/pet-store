import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/home.vue'
import Classify from '../pages/classify/classify.vue'
import ShowCat from '../pages/showCat/showCat.vue'
import UserCenter from '../pages/userCenter/userCenter.vue'

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
      component:Classify
    },
    {
      path:'/showCat',
      component:ShowCat
    },
    {
      path:'/userCenter',
      component:UserCenter
    },
  ]
})
