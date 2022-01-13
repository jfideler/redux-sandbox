import { Reverser } from "./models/Reverser";
import { Action, Reducer } from "redux";
import { ReverserActionTypes, REVERSE_NAME } from "./models/actions";

const defaultState: Reverser ={
    name: "Jeff F",
    firstName: "Jeff",
    lastName: "Fid"
}

// handle actions that have been 'dispatched'
export const reverserReducer: Reducer<Reverser, Action> = (state=defaultState, action: ReverserActionTypes) =>{
    console.log("Reverser Reducer  implemented");
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