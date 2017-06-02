import BearService from '../services/bear-service';

// actions
export const INITIALIZE = 'INITIALIZE';
export const SAVE_BEAR = 'SAVE_BEAR';
export const ADD_BEAR = 'ADD_BEAR';

// mutations
export const INITIALIZED = 'INITIALIZED';
export const BEAR_SAVED = 'BEAR_SAVED';
export const BEAR_ADDED = 'BEAR_ADDED';

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
    async [INITIALIZE]({ commit }) {
      try {
        const bears = await BearService.getBears();
        commit(INITIALIZED, { bears });
      } catch (error) {
        handleErrors(error);
      }
    },
    async [SAVE_BEAR]({ commit }, payload) {
      try {
        const bear = payload.bear;
        await BearService.update(bear);
        commit(BEAR_SAVED, { bear });
      } catch (error) {
        handleErrors(error);
      }
    },
    async [ADD_BEAR]({ commit }, payload) {
      try {
        console.log(payload.bear);
        const bear = await BearService.create(payload.bear);
        console.log(bear);
        commit(BEAR_ADDED, { bear });
      } catch (error) {
        handleErrors(error);
      }
    },
  },
  mutations: {
    [INITIALIZED](state, payload) {
      state.bears = payload.bears;
    },
    [BEAR_SAVED](state, payload) {
      const bear = state.bears.find(x => x.id === payload.bear.id);
      bear.name = payload.bear.name;
    },
    [BEAR_ADDED](state, payload) {
      state.bears.push(payload.bear);
    },
  },
  strict: true,
};
