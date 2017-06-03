import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';

import App from '@/views/App';
import initRoutes from '@/configs/routesConfig';
import { init } from '@/modules/router-module';
import BearModule, { NS } from '@/modules/bear-module';

import '@/assets/styles.css';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Router);

const store = new Vuex.Store({
  modules: {
    [NS]: BearModule,
  },
  strict: true,
});
const router = new Router({
  routes: initRoutes(store),
  mode: 'history',
});

init(store, router);
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
