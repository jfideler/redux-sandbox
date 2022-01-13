
/** Actions Model for Reverser */
// action types should be indicated with ALL CAPS

export const REVERSE_NAME = 'REVERSE_NAME';

interface ReverserAction{
    type:  typeof REVERSE_NAME
}


// note the nam prefix "Counter..."
// followed by 'Action...'
// followed by 'Types'
export type ReverserActionTypes = ReverserAction;
// (return reverse action type...)