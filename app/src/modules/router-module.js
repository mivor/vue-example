import createNs from '@/utils/ns';

export const name = 'router';
const _ = createNs(name);

export const PUSH = _('PUSH');
export const REPLACE = _('REPLACE');
export const GO = _('GO');

function create(router) {
  return {
    namespaced: true,
    actions: {
      PUSH: (ctx, location) => new Promise((res, rej) => {
        router.push(location, () => res(), () => rej());
      }),
      REPLACE: (ctx, location) => new Promise((res, rej) => {
        router.replace(location, () => res(), () => rej());
      }),
      GO: (ctx, n) => router.go(n),
    },
  };
}

export default (store, router) => {
  store.registerModule(name, create(router));
};

