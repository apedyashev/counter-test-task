import React from 'react';
import {shallow} from 'enzyme';
import NumbersList from 'containers/NumbersList';
import NumbersListPage from './index';

const renderComponent = () => shallow(<NumbersListPage />);

describe('<NumbersListPage />', () => {
  it('should render NumbersList', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(NumbersList).length).toEqual(1);
  });
});
