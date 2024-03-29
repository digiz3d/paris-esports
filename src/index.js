import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import registerServiceWorker from './registerServiceWorker'; // put that once finished dev
import { unregister as registerServiceWorker } from './registerServiceWorker'; // delete that once finished dev

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
window.store = store.getState;