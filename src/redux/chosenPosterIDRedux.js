// import axios from 'axios';

/* action name creator */
const reducerName = 'poster';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const CHOOSE_POSTER = createActionName('CHOOSE_POSTER');
const SET_CHOSENPOSTERID = createActionName('SET_CHOSENPOSTERID');

/* action creators */

export const setChosenPosterID = (value) => ({ payload: {value}, type: SET_CHOSENPOSTERID });

export const getChosenPosterId = (store) => {
  return store.chosenPosterID.value;
};

export const choosePoster = (payload) => ({
  payload,
  type: CHOOSE_POSTER,
}); // payload = posterId

/* reducer */
export default function reducer(statePart = [], action = {}) {
  // console.log('action:', action);
  switch (action.type) {
    case CHOOSE_POSTER: {      
      return action.payload; // payload = posterId
    }
    case SET_CHOSENPOSTERID: {
      return action.payload;
    }
    default:
      return statePart;
  }
}