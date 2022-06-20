/* action name creator */
const reducerName = 'poster';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_CHOSEN_POSTER_ID = createActionName('SET_CHOSEN_POSTER_ID');
const SET_START_POSTER_POSITION_X = createActionName('SET_START_POSTER_POSITION_X');
const SET_START_POSTER_POSITION_Y = createActionName('SET_START_POSTER_POSITION_Y');
const SET_START_CLICK_POSITION_X = createActionName('SET_START_CLICK_POSITION_X');
const SET_START_CLICK_POSITION_Y = createActionName('SET_START_CLICK_POSITION_Y');
const REMOVE_CHOSEN_POSTER = createActionName('REMOVE_CHOSEN_POSTER');

/* action creators */

export const setChosenPosterID = (id) => ({ id, type: SET_CHOSEN_POSTER_ID }); 
export const setStartPosterPositionX = (startPosterPositionX) => ({ payload: {startPosterPositionX}, type: SET_START_POSTER_POSITION_X });
export const setStartPosterPositionY = (startPosterPositionY) => ({ payload: {startPosterPositionY}, type: SET_START_POSTER_POSITION_Y });
export const setStartClickPositionX = (startClickPositionX) => ({ payload: {startClickPositionX}, type: SET_START_CLICK_POSITION_X });
export const setStartClickPositionY = (startClickPositionY) => ({ payload: {startClickPositionY}, type: SET_START_CLICK_POSITION_Y });
export const removeChosenPoster = () => ({
  type: REMOVE_CHOSEN_POSTER,
});

export const getChosenPosterId = (store) => {
  return store.chosenPoster.id;
};

export const getStartPosterPositionX = (store) => {
  return store.chosenPoster.startPosterPositionX;
};

export const getStartPosterPositionY = (store) => {
  return store.chosenPoster.startPosterPositionY;
};

export const getStartClickPositionX = (store) => {
  return store.chosenPoster.startClickPositionX;
};

export const getStartClickPositionY = (store) => {
  return store.chosenPoster.startClickPositionY;
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    
    case SET_CHOSEN_POSTER_ID: {
      return {
        ...statePart,
        id: action.id,
      };
    }
    case SET_START_POSTER_POSITION_X: {
      return {
        ...statePart,
        startPosterPositionX: action.payload.startPosterPositionX,
      };
    }
    case SET_START_POSTER_POSITION_Y: {
      return {
        ...statePart,
        startPosterPositionY: action.payload.startPosterPositionY,
      };
    }
    case SET_START_CLICK_POSITION_X: {
      return {
        ...statePart,
        startClickPositionX: action.payload.startClickPositionX,
      };
    }
    case SET_START_CLICK_POSITION_Y: {
      return {
        ...statePart,
        startClickPositionY: action.payload.startClickPositionY,
      };
    }
    case REMOVE_CHOSEN_POSTER: {
      return [];
    }
    default:
      return statePart;
  }
}