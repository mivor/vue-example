import createNs from '@/utils/ns';

export const namespace = 'router';
const ns = createNs(namespace);

export const PUSH = ns('PUSH');
export const REPLACE = ns('REPLACE');
export const GO = ns('GO');

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
  store.registerModule(namespace, create(router));
};

