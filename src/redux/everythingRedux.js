/* SELECTORS */

export const getEverything = ( state ) => state;

// action name creator
const reducerName = 'everything';
const createActionName = (name) => `app/${reducerName}/${name}`;

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    default:
      return state;

  }
}
