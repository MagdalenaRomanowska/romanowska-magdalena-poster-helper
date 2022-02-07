// import axios from 'axios';

/* action name creator */
const reducerName = 'spirograph';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const CHOOSE_SPIROGRAPH = createActionName('CHOOSE_SPIROGRAPH');
const SET_CHOSENSPIROGRAPHID = createActionName('SET_CHOSENSPIROGRAPHID');

/* action creators */

export const setChosenSpirographID = (value) => ({ payload: {value}, type: SET_CHOSENSPIROGRAPHID });

export const getChosenSpirographId = (store) => {
  return store.chosenSpirographID.value;
};

export const chooseSpirograph = (payload) => ({
  payload,
  type: CHOOSE_SPIROGRAPH,
}); // payload = spirographId

/* reducer */
export default function reducer(statePart = [], action = {}) {
  // console.log('action:', action);
  switch (action.type) {
    case CHOOSE_SPIROGRAPH: {      
      return action.payload; // payload = spirographId
    }
    case SET_CHOSENSPIROGRAPHID: {
      return action.payload;
    }
    default:
      return statePart;
  }
}