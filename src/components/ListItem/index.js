// libs
import React from 'react';
import {PropTypes} from 'prop-types';
// other
import './index.css';

export default function ListItem({data}) {
  return <div className="list-item">{data}</div>;
}
ListItem.propTypes = {
  data: PropTypes.any.isRequired,
};
