import Bears from '@/views/Bears';
import Dashboard from '@/views/Dashboard';

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
];
