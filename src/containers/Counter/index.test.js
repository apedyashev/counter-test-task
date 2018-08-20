import React from 'react';
import {mount} from 'enzyme';
import {createMockStore} from 'redux-test-utils';
import {IconButton} from 'components';
import {actionTypes as counterActionTypes} from 'modules/counter';
import Counter from './index';

const renderComponent = (props) => mount(<Counter {...props} />);

describe('<Counter />', () => {
  it('should dispatch COUNTER.UPDATE action with diff = 1', () => {
    const store = createMockStore({modules: {counter: {value: 1}}});
    const renderedComponent = renderComponent({store});
    renderedComponent
      .find(IconButton)
      .filter('.increment')
      .simulate('click');

    expect(
      store.isActionDispatched({
        type: counterActionTypes.COUNTER.UPDATE,
        diff: 1,
      })
    ).toEqual(true);
  });

  it('should dispatch COUNTER.UPDATE action with diff = -1', () => {
    const store = createMockStore({modules: {counter: {value: 1}}});
    const renderedComponent = renderComponent({store});
    renderedComponent
      .find(IconButton)
      // the difference from the previous test-case is here
      .filter('.decrement')
      .simulate('click');

    expect(
      store.isActionDispatched({
        type: counterActionTypes.COUNTER.UPDATE,
        diff: -1,
      })
    ).toEqual(true);
  });

  it('should get value of the counter from the store and render it (#1)', () => {
    const counterValue = 1;
    const store = createMockStore({modules: {counter: {value: counterValue}}});
    const renderedComponent = renderComponent({store});

    expect(renderedComponent.find('span.counter-value').text()).toEqual(counterValue.toString());
  });

  it('should get value of the counter from the store and render it (#2)', () => {
    const counterValue = 5;
    const store = createMockStore({modules: {counter: {value: counterValue}}});
    const renderedComponent = renderComponent({store});

    expect(renderedComponent.find('span.counter-value').text()).toEqual(counterValue.toString());
  });
});
