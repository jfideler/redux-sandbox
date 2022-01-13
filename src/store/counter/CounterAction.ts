import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actions";

// Actions will be 'dispatched'
export const incrementCount = () => ({
    type: INCREMENT_COUNTER,
})

export const decrementCount = () => ({
    type: DECREMENT_COUNTER,
})