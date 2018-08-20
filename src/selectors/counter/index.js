import {createSelector} from 'reselect';
import _range from 'lodash/range';

const counterModuleSelector = (state) => state.modules.counter;
export const counterSelector = createSelector([counterModuleSelector], ({value}) => value);
export const counterListSelector = createSelector([counterSelector], (counterValue) => _range(1, counterValue + 1));
