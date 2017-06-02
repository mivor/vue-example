import BearService from '@/services/bear-service';

export const NS = 'bear';

// actions
export const LOAD_BEARS = 'LOAD_BEARS';
export const LOAD_DASHBOARD = 'LOAD_DASHBOARD';

export const OPEN = 'OPEN';
export const SAVE = 'SAVE';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

// mutations
export const OPENED = 'OPENED';
export const SAVED = 'SAVED';
export const ADDED = 'ADDED';
export const REMOVED = 'REMOVED';

export function ns(name) {
  return `${NS}/${name}`;
}

function handleErrors(error) {
  // TODO: error handling
  // eslint-disable-next-line no-console
  console.error(error);
}

function addBear(state, commit, bear) {
  const exists = state.bears.find(x => x.id === bear.id);
  if (exists) return;

  commit(ADDED, { bear });
}

export default {
  namespaced: true,
  state() {
    return {
      bears: [],
      openedBear: null,
    };
  },
  actions: {
    LOAD_BEARS: async ({ state, commit }) => {
      try {
        const bears = await BearService.getBears();
        bears.forEach(x => addBear(state, commit, x));
      } catch (error) {
        handleErrors(error);
      }
    },
    LOAD_DASHBOARD: async ({ state, commit }) => {
      try {
        if (state.bears.length >= 4) return;

        const bears = await BearService.getBears(4);
        bears.forEach(x => addBear(state, commit, x));
      } catch (error) {
        handleErrors(error);
      }
    },
    OPEN: async ({ state, commit }, payload) => {
      try {
        let bear = state.bears.find(x => x.id === payload.id);
        if (!bear) {
          bear = await BearService.getBear(payload.id);
          addBear(state, commit, bear);
        }
        commit(OPENED, { bear });
      } catch (error) {
        handleErrors(error);
      }
    },
    SAVE: async ({ commit }, payload) => {
      try {
        const bear = payload.bear;
        await BearService.update(bear);
        commit(SAVED, { bear });
      } catch (error) {
        handleErrors(error);
      }
    },
    ADD: async ({ commit }, payload) => {
      try {
        const bear = await BearService.create(payload.bear);
        commit(ADDED, { bear });
      } catch (error) {
        handleErrors(error);
      }
    },
    REMOVE: async ({ commit }, payload) => {
      try {
        await BearService.delete(payload.id);
        commit(REMOVED, payload);
      } catch (error) {
        handleErrors(error);
      }
    },
  },
  mutations: {
    OPENED: (state, payload) => {
      state.openedBear = payload.bear;
    },
    SAVED: (state, payload) => {
      const bear = state.bears.find(x => x.id === payload.bear.id);
      bear.name = payload.bear.name;
    },
    ADDED: (state, payload) => {
      const bear = state.bears.find(x => x.id === payload.bear.id);
      if (bear) return;

      state.bears.push(payload.bear);
    },
    REMOVED: (state, payload) => {
      const bear = state.bears.find(x => x.id === payload.id);
      const index = state.bears.indexOf(bear);
      state.bears.splice(index, 1);
    },
  },
};
