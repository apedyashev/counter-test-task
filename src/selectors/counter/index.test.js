import {counterSelector, counterListSelector} from './index';

const buildCounterModule = (value) => ({modules: {counter: {value}}});
describe('Counter selectors', () => {
  describe('should provide counterSelector that', () => {
    it('returns counter value (#1)', () => {
      const counterValue = 1;
      const globalState = buildCounterModule(counterValue);
      expect(counterSelector(globalState)).toEqual(counterValue);
    });

    it('returns counter value (#2)', () => {
      const counterValue = 7;
      const globalState = buildCounterModule(counterValue);
      expect(counterSelector(globalState)).toEqual(counterValue);
    });

    it('returns counter value (#3)', () => {
      const counterValue = -1;
      const globalState = buildCounterModule(counterValue);
      expect(counterSelector(globalState)).toEqual(counterValue);
    });
  });

  describe('should provide counterListSelector that', () => {
    it('returns array generated based on counter value (#1)', () => {
      const counterValue = 1;
      const globalState = buildCounterModule(counterValue);
      expect(counterListSelector(globalState)).toEqual([1]);
    });

    it('returns array generated based on counter value (#2)', () => {
      const counterValue = 4;
      const globalState = buildCounterModule(counterValue);
      expect(counterListSelector(globalState)).toEqual([1, 2, 3, 4]);
    });

    it('returns empty array if counter is 0', () => {
      const counterValue = 0;
      const globalState = buildCounterModule(counterValue);
      expect(counterListSelector(globalState)).toEqual([]);
    });
  });
});
