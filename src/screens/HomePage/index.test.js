import React from 'react';
import {shallow} from 'enzyme';
import Counter from 'containers/Counter';
import HomePage from './index';

const renderComponent = () => shallow(<HomePage />);

describe('<HomePage />', () => {
  it('should render div.counter-container', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div.counter-container').length).toEqual(1);
  });

  it('should render Counter inside div.counter-container', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div.counter-container').find(Counter).length).toEqual(1);
  });
});
