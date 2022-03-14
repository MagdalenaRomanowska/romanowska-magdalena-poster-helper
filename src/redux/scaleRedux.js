/* action name creator */
const reducerName = 'scale';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_GLOBAL_SCALE = createActionName('SET_GLOBAL_SCALE');

/* action creators */

export const setGlobalScale = (value) => ({ payload: {value}, type: SET_GLOBAL_SCALE });

/* SELECTORS */

export const getGlobalScale = (store) => {
  return store.globalScale;
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {   
    case SET_GLOBAL_SCALE: {
      return  action.payload.value;
    } 
    default:
      return statePart;
  }
}
