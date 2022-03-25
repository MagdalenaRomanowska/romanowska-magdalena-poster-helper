/* SELECTORS */

export const getEverything = ( state ) => state;

// action name creator
const reducerName = 'everything';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
const SET_EVERYTHING = createActionName('SET_EVERYTHING');

// action creators
// export const setEverything = (everything) => ({ payload: {everything}, type: SET_EVERYTHING });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    // case SET_EVERYTHING: {
    //   return action.payload;
    // }        
    default:
      return statePart;
  }
}
