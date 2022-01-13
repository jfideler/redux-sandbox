
/** Actions Model for Counter */
// action types should be indicated with ALL CAPS

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

interface IncrementAction{
    type:  typeof INCREMENT_COUNTER
}

interface DecrementAction{
    type:  typeof DECREMENT_COUNTER
}

// note the nam prefix "Counter..."
// followed by 'Action...'
// followed by 'Types'
export type CounterActionTypes = IncrementAction | DecrementAction;
// (return either Increment OR Decrement action types)