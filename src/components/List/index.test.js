import React from 'react';
import {mount} from 'enzyme';
import List from './index';
import TextLabel from '../TextLabel';
import ListItem from '../ListItem';

const defaultProps = {items: [], emptyListMessage: 'no items found'};
const renderComponent = (props = defaultProps) => mount(<List {...props} />);

describe('<List />', () => {
  describe('with empty array as the items prop', () => {
    it('should render div as root element', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.find('div').length).toEqual(1);
    });

    it('should render TextLabel with emptyListMessage as children', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.find(TextLabel).text()).toEqual(defaultProps.emptyListMessage);
    });
  });

  describe('with valid items prop', () => {
    const items = [1, 2, 3];
    const renderedComponent = renderComponent({...defaultProps, items});

    it('should NOT render TextLabel', () => {
      expect(renderedComponent.find(TextLabel).length).toEqual(0);
    });

    it('should use ListItem to render items', () => {
      expect(renderedComponent.find(ListItem).length).toEqual(items.length);
    });
  });
});
