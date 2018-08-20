import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import './theme.css';
import App from 'containers/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

const enhancers = [rootReducer];
if (process.env.NODE_ENV !== 'production') {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
const store = createStore(...enhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
