import BearService from '@/services/bear-service';

// actions
export const LOAD_BEARS = 'LOAD_BEARS';
export const LOAD_DASHBOARD = 'LOAD_DASHBOARD';

export const OPEN_BEAR = 'OPEN_BEAR';
export const SAVE_BEAR = 'SAVE_BEAR';
export const ADD_BEAR = 'ADD_BEAR';
export const REMOVE_BEAR = 'REMOVE_BEAR';

// mutations
export const BEAR_OPENED = 'BEAR_OPENED';
export const BEAR_SAVED = 'BEAR_SAVED';
export const BEAR_ADDED = 'BEAR_ADDED';
export const BEAR_REMOVED = 'BEAR_REMOVED';

function handleErrors(error) {
  // TODO: error handling
  // eslint-disable-next-line no-console
  console.error(error);
}

function addBear(state, commit, bear) {
  const exists = state.bears.find(x => x.id === bear.id);
  if (exists) return;

  commit(BEAR_ADDED, { bear });
}

export default {
  state: {
    bears: [],
    openedBear: null,
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
    OPEN_BEAR: async ({ state, commit }, payload) => {
      try {
        let bear = state.bears.find(x => x.id === payload.id);
        if (!bear) {
          bear = await BearService.getBear(payload.id);
          addBear(state, commit, bear);
        }
        commit(BEAR_OPENED, { bear });
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
    ADD_BEAR: async (ctx, payload) => {
      try {
        const bear = await BearService.create(payload.bear);
        ctx.commit(BEAR_ADDED, { bear });
        console.log(ctx);
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
    BEAR_OPENED: (state, payload) => {
      state.openedBear = payload.bear;
    },
    BEAR_SAVED: (state, payload) => {
      const bear = state.bears.find(x => x.id === payload.bear.id);
      bear.name = payload.bear.name;
    },
    BEAR_ADDED: (state, payload) => {
      const bear = state.bears.find(x => x.id === payload.bear.id);
      if (bear) return;

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
