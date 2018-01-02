import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import myApp from './redux/reducers';
import myAppActions from './redux/actions';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
let store = createStore(myApp, enhancer);

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
