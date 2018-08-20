import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {HomePage, NumbersListPage} from 'screens';
import {TopNav} from 'components';
import './index.css';

const topNavItems = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/numbers-list',
    label: 'List',
  },
];
const App = () => (
  <Router>
    <div>
      <TopNav items={topNavItems} />

      <div className="main-content">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/numbers-list" component={NumbersListPage} />
      </div>
    </div>
  </Router>
);

export default App;
