import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';

import RootReducer from './store/reducers/index';
import {watchLoginRegistrationCall} from './store/sagas/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchLoginRegistrationCall);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

