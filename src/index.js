import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import root reducer here

const store = createStore(
    () => false,    // imported reducer will go here
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
window.store = store.getState;