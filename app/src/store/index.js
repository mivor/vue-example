import BearService from '../services/bear-service';

export const INITIALIZE = 'INITIALIZE';
export const INITIALIZED = 'INITIALIZED';

export default {
  state: {
    bears: null,
  },
  actions: {
    async [INITIALIZE]({ commit }) {
      const bears = await BearService.getBears();
      commit(INITIALIZED, { bears });
    },
  },
  mutations: {
    [INITIALIZED](state, payload) {
      state.bears = payload.bears;
    },
  },
  strict: true,
};
