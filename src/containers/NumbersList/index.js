// libs
import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
// selectors
import {counterListSelector} from 'selectors/counter';
// components
import {NavLink} from 'react-router-dom';
import {List, TextLabel} from 'components';

function NumbersList({numbers}) {
  return (
    <div>
      <TextLabel asHeader center>
        All the numbers for current counter
      </TextLabel>
      <List
        items={numbers}
        emptyListMessage={
          <span>
            There are no items in the list since your <b>counter is 0</b>.{' '}
            <NavLink exact to="/">
              Change the counter
            </NavLink>
          </span>
        }
      />
    </div>
  );
}
NumbersList.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

function select(state) {
  return {
    numbers: counterListSelector(state),
  };
}

export default connect(
  select,
  null
)(NumbersList);
