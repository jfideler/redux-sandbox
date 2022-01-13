import { combineReducers } from 'redux';
import { counterReducer } from './counter/CounterReducer';
import { reverserReducer } from './reverser/ReverserReducer';

export const reducers = combineReducers({ counterReducer, reverserReducer })