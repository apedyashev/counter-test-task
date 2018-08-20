import React from 'react';
import {shallow} from 'enzyme';
import withErrorBoundary from './index';

function TestComponent() {
  throw new Error('Test error');
}
const TestComponentWithHoc = withErrorBoundary(TestComponent);
const renderComponent = () => shallow(<TestComponentWithHoc />);

describe('withErrorBoundary HOC', () => {
  it('should render element without crashing', () => {
    renderComponent();
  });
});
