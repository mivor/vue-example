import createNs from '@/utils/ns';

export const NS = 'router';
export const ns = createNs(NS);

export const PUSH = 'PUSH';
export const REPLACE = 'REPLACE';
export const GO = 'GO';

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

export const init = (store, router) => {
  store.registerModule(NS, create(router));
};

