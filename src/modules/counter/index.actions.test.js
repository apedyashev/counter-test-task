import {actions, actionTypes} from './index';

describe('Counter module actions', () => {
  it('should provide the increase action', () => {
    expect(actions.increase()).toEqual({
      type: actionTypes.COUNTER.UPDATE,
      diff: 1,
    });
  });

  it('should provide the decrease action', () => {
    expect(actions.decrease()).toEqual({
      type: actionTypes.COUNTER.UPDATE,
      diff: -1,
    });
  });
});
