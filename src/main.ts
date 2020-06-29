import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// import library
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import SimpleLineIcons from 'vue-simple-line';
// install library

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component('simple-line-icons', SimpleLineIcons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: {
    SimpleLineIcons,
  },
  render: (h) => h(App),
}).$mount('#app');
