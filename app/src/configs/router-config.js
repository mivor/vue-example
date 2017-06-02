import Bears from '@/views/Bears';
import Dashboard from '@/views/Dashboard';
import BearDetails from '@/views/BearDetails';

export default [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/bears',
    component: Bears,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    name: 'bear-details',
    path: '/details/:id',
    component: BearDetails,
    props: true,
  },
];
