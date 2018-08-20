import React from 'react';
import {shallow} from 'enzyme';
import IconButton from './index';

const renderComponent = (children, props) => shallow(<IconButton {...props}>{children}</IconButton>);

describe('<IconButton />', () => {
  describe('without onClick prop', () => {
    const btnChildren = 'click me';
    const renderedComponent = renderComponent(btnChildren);

    it('should render button as root element', () => {
      expect(renderedComponent.find('button').length).toEqual(1);
    });

    it('should render children', () => {
      expect(renderedComponent.text()).toEqual(btnChildren);
    });
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent('my button', {onClick: onClickSpy});
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
