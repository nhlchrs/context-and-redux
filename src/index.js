import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ContextApi } from './ContextUseReducer/ContextApi'
import reducer, { initialState } from './ContextUseReducer/reducer'
import store from './Redux/store/store'
import {Provider} from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
  {/* <ContextApi initialState={initialState} reducer={reducer} > */}
  <Provider store={store}>
    <App />
  </Provider>
  {/* </ContextApi> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
