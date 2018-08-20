// libs
import React from 'react';
import {PropTypes} from 'prop-types';
// components
import {NavLink} from 'react-router-dom';
// other
import './index.css';

export default function TopNav({items}) {
  return (
    <ul className="top-nav">
      {items.map((item) => (
        <li key={item.label} className="top-nav__item">
          <NavLink exact to={item.to} activeClassName="top-nav__item--active">
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
TopNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
