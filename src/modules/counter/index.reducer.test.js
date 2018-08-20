import reducer, {initialState, actionTypes} from './index';

describe('Counter module reducer', () => {
  it('should return initialState if state is undefined and action is not passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should add action.diff to state.value (diff=1)', () => {
    const diff = 1;
    expect(reducer(undefined, {type: actionTypes.COUNTER.UPDATE, diff})).toEqual({
      ...initialState,
      value: initialState.value + diff,
    });
  });

  it('should add action.diff to state.value (diff=3)', () => {
    const diff = 3;
    expect(reducer(undefined, {type: actionTypes.COUNTER.UPDATE, diff})).toEqual({
      ...initialState,
      value: initialState.value + diff,
    });
  });

  it('should add action.diff to state.value (diff=1) when state.value is not default', () => {
    const diff = 3;
    const initialValue = 2;
    expect(reducer({value: initialValue}, {type: actionTypes.COUNTER.UPDATE, diff})).toEqual({
      ...initialState,
      value: initialValue + diff,
    });
  });

  it('should not allow state.value to be negative', () => {
    const diff = -1;
    expect(reducer(undefined, {type: actionTypes.COUNTER.UPDATE, diff})).toEqual({
      ...initialState,
      value: 0,
    });
  });

  it('should not allow state.value to be greater than 10', () => {
    const diff = 1;
    const initialValue = 10;
    expect(reducer({value: initialValue}, {type: actionTypes.COUNTER.UPDATE, diff})).toEqual({
      ...initialState,
      value: 10,
    });
  });
});
