import React from 'react';
import {mount} from 'enzyme';
import {BrowserRouter, NavLink} from 'react-router-dom';
import TopNav from './index';

const defaultProps = {items: []};
const renderComponent = (props = defaultProps) =>
  // wrap TopNav with BrowserRouter since NavLink will throw an error without it
  mount(
    <BrowserRouter>
      <TopNav {...props} />
    </BrowserRouter>
  );

describe('<TopNav />', () => {
  describe('with empty array as the items prop', () => {
    it('should render ul as root element', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.find('ul').length).toEqual(1);
    });

    it('should not render any li-s', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.find('li').length).toEqual(0);
    });
  });

  describe('with valid items prop', () => {
    const items = [{to: '/candies', label: 'Delicious candies'}, {to: '/coffee', label: 'Fresh coffee'}];
    const renderedComponent = renderComponent({items});
    it('should render as many li-s as number of elements passed to items', () => {
      expect(renderedComponent.find('li').length).toEqual(items.length);
    });

    it('should render NavLink inside each li', () => {
      renderedComponent.find('li').forEach((liElement) => {
        expect(liElement.find(NavLink).length).toEqual(1);
      });
    });

    it('should pass item.to to NavLink', () => {
      renderedComponent.find('li').forEach((liElement, i) => {
        expect(liElement.find(NavLink).prop('to')).toEqual(items[i].to);
      });
    });

    it('should pass item.label to NavLink as the children', () => {
      renderedComponent.find('li').forEach((liElement, i) => {
        expect(liElement.find(NavLink).text()).toEqual(items[i].label);
      });
    });
  });
});
