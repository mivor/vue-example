import BearService from '../services/bear-service';

export const INITIALIZE = 'INITIALIZE';
export const INITIALIZED = 'INITIALIZED';

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
  },
  mutations: {
    [INITIALIZED](state, payload) {
      state.bears = payload.bears;
    },
  },
  strict: true,
};
