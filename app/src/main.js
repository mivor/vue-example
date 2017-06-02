import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';

import App from './views/App';
import routes from './configs/router-config';
import VuexStore, { INITIALIZE } from './store/index';

import './assets/styles.css';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Router);

const store = new Vuex.Store(VuexStore);
const router = new Router({
  routes,
});

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created() {
    this.$store.dispatch(INITIALIZE);
  },
  render: h => h(App),
});
