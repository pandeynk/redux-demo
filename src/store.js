import {applyMiddleware, createStore} from 'redux';
import reducer from './reducers';
//import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
//import thunk from 'redux-thunk';

let middleware = applyMiddleware(promise());

export default createStore(reducer, {}, middleware);
