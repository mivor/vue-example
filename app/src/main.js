import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { sync as addRoute } from 'vuex-router-sync';

import App from '@/views/App';
import initRoutes from '@/configs/routesConfig';
import addRouter from '@/modules/router-module';
import BearModule from '@/modules/bear-module';

import '@/assets/styles.css';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Router);

const store = new Vuex.Store({
  modules: {
    ...BearModule,
  },
  strict: true,
});
const router = new Router({
  routes: initRoutes(store),
  mode: 'history',
});

addRouter(store, router);
addRoute(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
