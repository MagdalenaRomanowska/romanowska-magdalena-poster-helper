/* SELECTORS */

export const getAllParameters = ({ posters }) => posters;

// action name creator
const reducerName = 'parameter';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
const SET_NAME = createActionName('SET_NAME');
const SET_X_POSTER_POSITION = createActionName('SET_X_POSTER_POSITION');
const SET_Y_POSTER_POSITION = createActionName('SET_Y_POSTER_POSITION');
const SET_POSTER_ANGLE = createActionName('SET_POSTER_ANGLE');
const SET_POSTER_WIDTH = createActionName('SET_POSTER_WIDTH');
const SET_POSTER_HEIGHT = createActionName('SET_POSTER_HEIGHT');
const ADD_POSTER = createActionName('ADD_POSTER');
const MOVE_BY_DELTA_X = createActionName('MOVE_BY_DELTA_X');
const MOVE_BY_DELTA_Y = createActionName('MOVE_BY_DELTA_Y');
const SET_PICTURE_NAME = createActionName('SET_PICTURE_NAME');
const SET_BACKGROUNDWALL_NAME = createActionName('SET_BACKGROUNDWALL_NAME');
const SET_POSTER_DIMENSIONS_NAME = createActionName('SET_POSTER_DIMENSIONS_NAME');

// action creators
export const setName = (id, posterName) => ({ payload: {id, posterName}, type: SET_NAME });
export const setXPosterPosition = (id, xPosterPosition) => ({ payload: {id, xPosterPosition}, type: SET_X_POSTER_POSITION });
export const setYPosterPosition = (id, yPosterPosition) => ({ payload: {id, yPosterPosition}, type: SET_Y_POSTER_POSITION });
export const setPosterAngle = (id, angle) => ({ payload: {id, angle}, type: SET_POSTER_ANGLE });
export const setPosterWidth = (id, posterWidth) => ({ payload: {id, posterWidth}, type: SET_POSTER_WIDTH });
export const setPosterHeight = (id, posterHeight) => ({ payload: {id, posterHeight}, type: SET_POSTER_HEIGHT });
export const addPoster = (payload) => ({ payload, type: ADD_POSTER });
export const movePosterByDeltaX =(id, deltaX) => ({ payload: {id, deltaX}, type: MOVE_BY_DELTA_X });
export const movePosterByDeltaY =(id, deltaY) => ({ payload: {id, deltaY}, type: MOVE_BY_DELTA_Y });
export const setPictureName =(id, pictureName) => ({ payload: {id, pictureName}, type: SET_PICTURE_NAME });
export const setBackgroundWallName =(id, backgroundWallName) => ({ payload: {id, backgroundWallName}, type: SET_BACKGROUNDWALL_NAME });
export const setPosterDimensionsName =(id, posterDimensionsName) => ({ payload: {id, posterDimensionsName}, type: SET_POSTER_DIMENSIONS_NAME });

export const getPictureNameByPosterID = ({ posters }, posterId) => {
  const filtered = posters.filter((p) => p.id === posterId);
  return filtered.length ? filtered[0].pictureName : { error: true };
};

export const getBackgroundWallNameByPosterID = ({ posters }, posterId) => {
  const filtered = posters.filter((p) => p.id === posterId);
  return filtered.length ? filtered[0].backgroundWallName : { error: true };
};

export const getPosterDimensionsNameByPosterID = ({ posters }, posterId) => {
  const filtered = posters.filter((p) => p.id === posterId);
  return filtered.length ? filtered[0].posterDimensionsName : { error: true };
};

export const getPosterParameters = ({ posters }, posterId) => {
  const filtered = posters.filter((p) => p.id === posterId);
  return filtered.length ? filtered[0] : { error: true };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_NAME: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          name: action.payload.posterName,
        };
      });
    }
    case SET_X_POSTER_POSITION: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          xPosterPosition: parseInt(action.payload.xPosterPosition),
        };
      });
    }
    case SET_Y_POSTER_POSITION: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          yPosterPosition: parseInt(action.payload.yPosterPosition),
        };
      });
    }   
    case SET_POSTER_ANGLE: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          angle: parseInt(action.payload.angle),
        };
      });
    }    
    case SET_POSTER_WIDTH: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          posterWidth: parseInt(action.payload.posterWidth),
        };
      });
    }
    case SET_POSTER_HEIGHT: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          posterHeight: parseInt(action.payload.posterHeight),
        };
      });
    }
    case SET_PICTURE_NAME: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          pictureName: action.payload.pictureName,
        };
      });
    }
    case SET_BACKGROUNDWALL_NAME: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          backgroundWallName: action.payload.backgroundWallName,
        };
      });
    }
    case SET_POSTER_DIMENSIONS_NAME: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          posterDimensionsName: action.payload.posterDimensionsName,
        };
      });
    }
    case ADD_POSTER: {
      let newArray = statePart.slice();
      newArray.push(action.payload);
      return newArray;
    }
    case MOVE_BY_DELTA_X: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          xPosterPosition: item.xPosterPosition + parseInt(action.payload.deltaX),
        };
      });
    }
    case MOVE_BY_DELTA_Y: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          yPosterPosition: item.yPosterPosition + parseInt(action.payload.deltaY),
        };
      });
    }
    default:
      return statePart;
  }
}
