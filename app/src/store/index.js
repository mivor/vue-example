import BearService from '../services/bear-service';

// actions
export const INITIALIZE = 'INITIALIZE';
export const SAVE_BEAR = 'SAVE_BEAR';
export const ADD_BEAR = 'ADD_BEAR';
export const REMOVE_BEAR = 'REMOVE_BEAR';

// mutations
export const INITIALIZED = 'INITIALIZED';
export const BEAR_SAVED = 'BEAR_SAVED';
export const BEAR_ADDED = 'BEAR_ADDED';
export const BEAR_REMOVED = 'BEAR_REMOVED';

function handleErrors(error) {
  // TODO: error handling
  // eslint-disable-next-line no-console
  console.error(error);
}

export default {
  state: {
    bears: [],
  },
  actions: {
    INITIALIZE: async ({ commit }) => {
      try {
        const bears = await BearService.getBears();
        commit(INITIALIZED, { bears });
      } catch (error) {
        handleErrors(error);
      }
    },
    SAVE_BEAR: async ({ commit }, payload) => {
      try {
        const bear = payload.bear;
        await BearService.update(bear);
        commit(BEAR_SAVED, { bear });
      } catch (error) {
        handleErrors(error);
      }
    },
    ADD_BEAR: async ({ commit }, payload) => {
      try {
        const bear = await BearService.create(payload.bear);
        commit(BEAR_ADDED, { bear });
      } catch (error) {
        handleErrors(error);
      }
    },
    REMOVE_BEAR: async ({ commit }, payload) => {
      try {
        await BearService.delete(payload.id);
        commit(BEAR_REMOVED, payload);
      } catch (error) {
        handleErrors(error);
      }
    },
  },
  mutations: {
    INITIALIZED: (state, payload) => {
      state.bears = payload.bears;
    },
    BEAR_SAVED: (state, payload) => {
      const bear = state.bears.find(x => x.id === payload.bear.id);
      bear.name = payload.bear.name;
    },
    BEAR_ADDED: (state, payload) => {
      state.bears.push(payload.bear);
    },
    BEAR_REMOVED: (state, payload) => {
      const bear = state.bears.find(x => x.id === payload.id);
      const index = state.bears.indexOf(bear);
      state.bears.splice(index, 1);
    },
  },
  strict: true,
};
