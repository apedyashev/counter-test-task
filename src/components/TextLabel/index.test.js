import React from 'react';
import {shallow} from 'enzyme';
import TextLabel from './index';

const defaultProps = {};
const renderComponent = (children, props = defaultProps) => shallow(<TextLabel {...props}>{children}</TextLabel>);

describe('<TextLabel />', () => {
  describe('should render', () => {
    const labelChild = 'my awesome label';
    const renderedComponent = renderComponent(labelChild);
    it('span as root element', () => {
      expect(renderedComponent.find('span').length).toEqual(1);
    });

    it('children', () => {
      expect(renderedComponent.find('span').text()).toEqual(labelChild);
    });
  });

  describe('with asHeader prop', () => {
    it('should add text-label--header class when asHeader is true', () => {
      const renderedComponent = renderComponent('', {asHeader: true});
      expect(renderedComponent.find('span.text-label').hasClass('text-label--header')).toEqual(true);
    });

    it('should NOT add text-label--header class  when asHeader is false', () => {
      const renderedComponent = renderComponent('', {asHeader: false});
      expect(renderedComponent.find('span.text-label').hasClass('text-label--header')).toEqual(false);
    });
  });

  describe('with the center prop', () => {
    it('should add text-label--center class when center is true', () => {
      const renderedComponent = renderComponent('', {center: true});
      expect(renderedComponent.find('span.text-label').hasClass('text-label--center')).toEqual(true);
    });

    it('should NOT add text-label--center class  when center is false', () => {
      const renderedComponent = renderComponent('', {center: false});
      expect(renderedComponent.find('span.text-label').hasClass('text-label--center')).toEqual(false);
    });
  });

  describe('with the inactive prop', () => {
    it('should add text-label--inactive class when inactive is true', () => {
      const renderedComponent = renderComponent('', {inactive: true});
      expect(renderedComponent.find('span.text-label').hasClass('text-label--inactive')).toEqual(true);
    });

    it('should NOT add text-label--inactive class  when inactive is false', () => {
      const renderedComponent = renderComponent('', {inactive: false});
      expect(renderedComponent.find('span.text-label').hasClass('text-label--inactive')).toEqual(false);
    });
  });

  it('should allow adding a custom className', () => {
    const className = 'test-cutom-class-name';
    const renderedComponent = renderComponent('', {className});
    expect(renderedComponent.find('span.text-label').hasClass(className)).toEqual(true);
  });
});
