import { CounterActionTypes, INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actions";
import { Action, Reducer } from "redux";
import { Counter } from "./models";


const defaultState: Counter = {
    count: 0
}

// handle actions that have been 'dispatched'
export const counterReducer: Reducer<Counter, Action> = (state = defaultState, action: CounterActionTypes) =>{

    // to keep it 'immutable', create a brand new one
    const nextState = {count: state.count};

    switch (action.type){
        case INCREMENT_COUNTER:
            nextState.count = state.count + 1;
            return nextState;

        case DECREMENT_COUNTER:
            nextState.count = state.count - 1;
            return nextState;

        default:
            return state;

    }
}