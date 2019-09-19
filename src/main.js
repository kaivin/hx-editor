import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipboard from 'vue-clipboard2';
import '@/styles/index.scss'; // global css
import 'animate.css';
import store from './store';
import App from './App.vue';
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };
Vue.use(ElementUI);
Vue.use(VueClipboard);
Vue.config.productionTip = false;
require('./vendor/flexible.js');

// router.beforeEach(async(to, from, next) => {

// });

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
