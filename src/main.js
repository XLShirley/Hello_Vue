import store from './store/index.js'
import Vue from 'vue'
import App from './App.vue'
import VueDragResize from 'vue-drag-resize';
// 引入router
import router from '@/router/index'

import ElementUI from 'element-ui';  //导入组件
import 'element-ui/lib/theme-chalk/index.css';  //导入样式
 
Vue.component('vue-drag-resize', VueDragResize);
Vue.use(ElementUI); //全局引用
window.eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
