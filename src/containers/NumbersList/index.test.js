import React from 'react';
import {mount} from 'enzyme';
import {createMockStore} from 'redux-test-utils';
import {BrowserRouter} from 'react-router-dom';
import {List, TextLabel} from 'components';
import NumbersList from './index';

const renderComponent = (props) =>
  // wrap TopNav with BrowserRouter since NavLink will throw an error without it
  mount(
    <BrowserRouter>
      <NumbersList {...props} />
    </BrowserRouter>
  );

describe('<NumbersList />', () => {
  it('should render TextLabel as centered header', () => {
    const counterValue = 1;
    const store = createMockStore({modules: {counter: {value: counterValue}}});
    const renderedComponent = renderComponent({store});

    expect(renderedComponent.find(TextLabel).prop('asHeader')).toEqual(true);
    expect(renderedComponent.find(TextLabel).prop('center')).toEqual(true);
  });

  it('should render List with array of numbers generated based on counter value (#1)', () => {
    const counterValue = 6;
    const store = createMockStore({modules: {counter: {value: counterValue}}});
    const renderedComponent = renderComponent({store});

    expect(renderedComponent.find(List).prop('items')).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should render List with array of numbers generated based on counter value (#2)', () => {
    const counterValue = 3;
    const store = createMockStore({modules: {counter: {value: counterValue}}});
    const renderedComponent = renderComponent({store});

    expect(renderedComponent.find(List).prop('items')).toEqual([1, 2, 3]);
  });
});
