import { Reverser } from "./models";
import { Action, Reducer } from "redux";
import { ReverserActionTypes, REVERSE_NAME } from "./actions";

const defaultState: Reverser ={
    name: "Jon Smith",
    firstName: "Jon",
    lastName: "Smith"
}

// handle actions that have been 'dispatched'
export const reverserReducer: Reducer<Reverser, Action> = (state=defaultState, action: ReverserActionTypes) =>{

    // to keep it 'immutable', create a brand new one
    const nextState = {firstName: state.firstName, lastName: state.lastName, name: state.name};
    nextState.name = nextState.firstName + " " + nextState.lastName;
    switch (action.type){

        case REVERSE_NAME:
            nextState.firstName = state.lastName;
            nextState.lastName = state.firstName;
            nextState.name = nextState.firstName + " " + nextState.lastName;
            return nextState;

        default:
            return state;

    }
}