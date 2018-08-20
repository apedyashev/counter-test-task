// libs
import React from 'react';
// components
import Counter from 'containers/Counter';
// other
import './index.css';

export default function HomePage() {
  return (
    <div className="counter-container">
      <Counter />
    </div>
  );
}
HomePage.propTypes = {};
