import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//the reason we are putting this here and not directly in applyMiddleware is
//in the case we might want to modify the logger array.
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
