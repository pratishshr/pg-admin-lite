/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

//assets
require('../assets/css/font-awesome.min.css');
require('../assets/css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

import App from './components/App';

ReactDOM.render(  
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#app-container'));
