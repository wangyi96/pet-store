import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './stroe/index'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem,Toast,Lazyload,IndexList, IndexSection } from 'mint-ui';
import './mock/mockServer'


Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(Lazyload);


new Vue({
  el: '#root',
  render:ce => ce(App),
  router,
  store
})
