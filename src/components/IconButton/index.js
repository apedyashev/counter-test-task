// libs
import React from 'react';
import {PropTypes} from 'prop-types';
// other
import './index.css';

export default function IconButton({children, onClick}) {
  return (
    <button type="button" className="icon-button" onClick={onClick}>
      {children}
    </button>
  );
}
IconButton.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};
