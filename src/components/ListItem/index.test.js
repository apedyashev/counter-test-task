import React from 'react';
import {shallow} from 'enzyme';
import ListItem from './index';

const defaultProps = {data: 'some data'};
const renderComponent = (props = defaultProps) => shallow(<ListItem {...props} />);

describe('<ListItem />', () => {
  it('should render div as root element', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toEqual(1);
  });

  it('should render data prop inside root div', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').text()).toEqual(defaultProps.data);
  });
});
