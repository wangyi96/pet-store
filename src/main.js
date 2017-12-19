import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './stroe/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Swipe, SwipeItem,Toast,Lazyload,IndexList, IndexSection } from 'mint-ui';
import './mock/mockServer'

import 'mint-ui/lib/style.css'

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);

Vue.use(Lazyload);
Vue.use(ElementUI)


new Vue({
  el: '#root',
  render:ce => ce(App),
  router,
  store
})
