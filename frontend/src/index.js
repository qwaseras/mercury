import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

import './styles/main.css';

import rootReducer from './reducer';
import getRoutes from './routes';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {getRoutes(store)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
