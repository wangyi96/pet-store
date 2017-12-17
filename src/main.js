import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './stroe/index'
import { Lazyload } from 'mint-ui';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Swipe, SwipeItem } from 'mint-ui';
import './mock/mockServer'

Vue.use(Lazyload);
Vue.use(ElementUI)

new Vue({
  el: '#root',
  render:ce => ce(App),
  router,
  store
})
