import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import '@vant/touch-emulator';
let flag=true;
if(flag){
  require('./assets/js/mock')//引入mock.js
}
Vue.use(ElementUI);
Vue.use(MintUI)
NutUI.install(Vue);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
