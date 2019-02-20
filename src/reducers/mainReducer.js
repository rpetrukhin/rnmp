import { combineReducers } from 'redux';

import tokenReducer from './tokenReducer';
import productsNumberReducer from './productsNumberReducer';

const reducers = {
	tokenStore: tokenReducer,
	productsNumberStore: productsNumberReducer,
};

export default combineReducers(reducers);
