/* SELECTORS */

export const getEverything = ( state ) => state;

// action name creator
const reducerName = 'everything';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
const DELETE_EVERYTHING = createActionName('DELETE_EVERYTHING');

// action creators
export const deleteEverything = (items) => ({ payload : {items}, type: DELETE_EVERYTHING });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case DELETE_EVERYTHING: {    
      return state;
    } 
    default:
      return state;

  }
}
