// libs
import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
// actions
import {actions as counterActions} from 'modules/counter';
// selectors
import {counterSelector} from 'selectors/counter';
// components
import {TextLabel, IconButton} from 'components';
// other
import withErrorBoundary from 'utils/hocs/withErrorBoundary';
import './index.css';

function Counter({incrementCounter, decrementCounter, counterValue}) {
  return (
    <div>
      <TextLabel>Counter</TextLabel>
      <IconButton className="decrement" onClick={decrementCounter}>
        -
      </IconButton>
      <TextLabel className="counter-value">{counterValue}</TextLabel>
      <IconButton className="increment" onClick={incrementCounter}>
        +
      </IconButton>
    </div>
  );
}
Counter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  counterValue: PropTypes.number.isRequired,
};

function select(state) {
  return {
    counterValue: counterSelector(state),
  };
}

export default compose(
  connect(
    select,
    {
      incrementCounter: counterActions.increase,
      decrementCounter: counterActions.decrease,
    }
  ),
  withErrorBoundary
)(Counter);
