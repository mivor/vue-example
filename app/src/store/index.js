import mockBears from './mock-bears';

export const INITIALIZE = 'INITIALIZE';
export const INITIALIZED = 'INITIALIZED';

export default {
  state: {
    bears: null,
  },
  actions: {
    [INITIALIZE]({ commit }) {
      commit(INITIALIZED, { bears: mockBears });
    },
  },
  mutations: {
    [INITIALIZED](state, payload) {
      state.bears = payload.bears;
    },
  },
  strict: true,
};
