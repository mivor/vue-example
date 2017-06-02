import { LOAD_BEARS, LOAD_DASHBOARD, OPEN_BEAR } from '@/store/index';

import Bears from '@/views/Bears';
import Dashboard from '@/views/Dashboard';
import BearDetails from '@/views/BearDetails';

export default store => [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/bears',
    component: Bears,
    beforeEnter: (to, from, next) => {
      store.dispatch(LOAD_BEARS);
      next();
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      store.dispatch(LOAD_DASHBOARD);
      next();
    },
  },
  {
    name: 'bear-details',
    path: '/details/:id',
    component: BearDetails,
    beforeEnter: (to, from, next) => {
      store.dispatch(OPEN_BEAR, { id: to.params.id });
      next();
    },
  },
];
