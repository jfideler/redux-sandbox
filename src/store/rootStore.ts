import {createStore, combineReducers} from 'redux';
import { counterReducer } from './counter/CounterReducer';
import { reverserReducer } from './reverser/ReverserReducer';

// boilerplate
export const rootReducer = combineReducers({counterReducer,reverserReducer })
export type MyAppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);