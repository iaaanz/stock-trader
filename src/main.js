import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMask from 'v-mask';
import vuetify from './plugins/vuetify';
import App from './App';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueMask);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://traders-de-elite-default-rtdb.firebaseio.com/';

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
