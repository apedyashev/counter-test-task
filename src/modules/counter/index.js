// Constants
export const actionTypes = {
  COUNTER: {
    UPDATE: '@COUNTER/UPDATE',
  },
};

export const actions = {
  increase: () => ({type: actionTypes.COUNTER.UPDATE, diff: 1}),
  decrease: () => ({type: actionTypes.COUNTER.UPDATE, diff: -1}),
};

export const initialState = {
  value: 0,
};

const MIN_COUNTER = 0;
const MAX_COUNTER = 10;

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTER.UPDATE: {
      const value = Math.min(MAX_COUNTER, Math.max(MIN_COUNTER, state.value + action.diff));

      return {...state, value};
    }

    default:
      return state;
  }
};
