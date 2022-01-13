import {createStore, combineReducers} from 'redux';
import { reducers } from './rootReducer';

// boilerplate
export const rootReducer = reducers;
export type MyAppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);