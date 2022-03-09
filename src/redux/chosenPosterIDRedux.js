// import axios from 'axios';

/* action name creator */
const reducerName = 'poster';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_CHOSENPOSTERID = createActionName('SET_CHOSENPOSTERID');
const SET_STARTPOSTERPOSITIONX = createActionName('SET_STARTPOSTERPOSITIONX');
const SET_STARTPOSTERPOSITIONY = createActionName('SET_STARTPOSTERPOSITIONY');
const SET_STARTCLICKPOSITIONX = createActionName('SET_STARTCLICKPOSITIONX');
const SET_STARTCLICKPOSITIONY = createActionName('SET_STARTCLICKPOSITIONY');

/* action creators */

export const setChosenPosterID = (value) => ({ payload: {value}, type: SET_CHOSENPOSTERID });
export const setStartPosterPositionX = (value) => ({ payload: {value}, type: SET_STARTPOSTERPOSITIONX });
export const setStartPosterPositionY = (value) => ({ payload: {value}, type: SET_STARTPOSTERPOSITIONY });
export const setStartClickPositionX = (value) => ({ payload: {value}, type: SET_STARTCLICKPOSITIONX });
export const setStartClickPositionY = (value) => ({ payload: {value}, type: SET_STARTCLICKPOSITIONY });

export const getChosenPosterId = (store) => {
  return store.chosenPosterID.value;
};

export const getStartPosterPositionX = (store) => {
  return store.chosenPosterID.startPosterPositionX;
};

export const getStartPosterPositionY = (store) => {
  return store.chosenPosterID.startPosterPositionY;
};

export const getStartClickPositionX = (store) => {
  return store.chosenPosterID.startClickPositionX;
};

export const getStartClickPositionY = (store) => {
  return store.chosenPosterID.startClickPositionY;
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    
    case SET_CHOSENPOSTERID: {
      return {
        ...statePart,
        value: action.payload.value,
      };
    }
    case SET_STARTPOSTERPOSITIONX: {
      return {
        ...statePart,
        startPosterPositionX: action.payload.value,
      };
    }
    case SET_STARTPOSTERPOSITIONY: {
      return {
        ...statePart,
        startPosterPositionY: action.payload.value,
      };
    }
    case SET_STARTCLICKPOSITIONX: {
      return {
        ...statePart,
        startClickPositionX: action.payload.value,
      };
    }
    case SET_STARTCLICKPOSITIONY: {
      return {
        ...statePart,
        startClickPositionY: action.payload.value,
      };
    }
    default:
      return statePart;
  }
}