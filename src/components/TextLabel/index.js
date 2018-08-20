// libs
import React from 'react';
import {PropTypes} from 'prop-types';
import cn from 'classnames';
// other
import './index.css';

export default function TextLabel({children, className, asHeader, center, inactive}) {
  return (
    <span
      className={cn('text-label', className, {
        'text-label--header': asHeader,
        'text-label--center': center,
        'text-label--inactive': inactive,
      })}
    >
      {children}
    </span>
  );
}
TextLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  asHeader: PropTypes.bool,
  center: PropTypes.bool,
  inactive: PropTypes.bool,
};
