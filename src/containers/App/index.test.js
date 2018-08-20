import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {shallow} from 'enzyme';
import {TopNav} from 'components';
import App from './index';

const renderComponent = () => shallow(<App />);

describe('<App />', () => {
  it('should render BrowserRouter as root element', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(BrowserRouter).length).toEqual(1);
  });

  it('should render TopNav', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(TopNav).length).toEqual(1);
  });

  it('should render div with .main-content class', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div.main-content').length).toEqual(1);
  });

  it('should render 2 routes', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Route).length).toEqual(2);
  });
});
