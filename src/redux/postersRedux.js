/* SELECTORS */

export const getAllPostersByProjectName = ({ posters }, projectName) => {
  const filtered = posters.filter((p) => p.projectName === projectName);
  return filtered;
};

// action name creator
const reducerName = 'poster';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
const SET_X_POSTER_POSITION = createActionName('SET_X_POSTER_POSITION');
const SET_Y_POSTER_POSITION = createActionName('SET_Y_POSTER_POSITION');
const SET_POSTER_ANGLE = createActionName('SET_POSTER_ANGLE');
const SET_POSTER_WIDTH = createActionName('SET_POSTER_WIDTH');
const SET_POSTER_HEIGHT = createActionName('SET_POSTER_HEIGHT');
const ADD_POSTER = createActionName('ADD_POSTER');
const REMOVE_POSTER = createActionName('REMOVE_POSTER');
const MOVE_POSTER_UP = createActionName('MOVE_POSTER_UP');
const MOVE_POSTER_DOWN = createActionName('MOVE_POSTER_DOWN');
const REMOVE_ALL_POSTERS = createActionName('REMOVE_ALL_POSTERS');
const SET_PICTURE_NAME = createActionName('SET_PICTURE_NAME');
const SET_BACKGROUNDWALL_NAME = createActionName('SET_BACKGROUNDWALL_NAME');
const SET_POSTER_DIMENSIONS_NAME = createActionName(
  'SET_POSTER_DIMENSIONS_NAME'
);
const SET_POSTERS = createActionName('SET_POSTERS');

// action creators
export const setXPosterPosition = (id, xPosterPosition) => ({
  payload: { id, xPosterPosition },
  type: SET_X_POSTER_POSITION,
});
export const setYPosterPosition = (id, yPosterPosition) => ({
  payload: { id, yPosterPosition },
  type: SET_Y_POSTER_POSITION,
});
export const setPosterAngle = (id, angle) => ({
  payload: { id, angle },
  type: SET_POSTER_ANGLE,
});
export const setPosterWidth = (id, posterWidth) => ({
  payload: { id, posterWidth },
  type: SET_POSTER_WIDTH,
});
export const setPosterHeight = (id, posterHeight) => ({
  payload: { id, posterHeight },
  type: SET_POSTER_HEIGHT,
});
export const addPoster = (payload) => ({ payload, type: ADD_POSTER });
export const removePoster = (payload) => ({ payload, type: REMOVE_POSTER });
export const movePosterUp = (payload) => ({ payload, type: MOVE_POSTER_UP });
export const movePosterDown = (payload) => ({
  payload,
  type: MOVE_POSTER_DOWN,
});
export const removeAllPosters = (payload) => ({
  payload,
  type: REMOVE_ALL_POSTERS,
});
export const setPictureName = (id, pictureName) => ({
  payload: { id, pictureName },
  type: SET_PICTURE_NAME,
});
export const setBackgroundWallName = (id, backgroundWallName) => ({
  payload: { id, backgroundWallName },
  type: SET_BACKGROUNDWALL_NAME,
});
export const setPosterDimensionsName = (id, posterDimensionsName) => ({
  payload: { id, posterDimensionsName },
  type: SET_POSTER_DIMENSIONS_NAME,
});
export const setPosters = (value) => ({
  payload: { value },
  type: SET_POSTERS,
});

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
    case REMOVE_POSTER: {
      return statePart.filter((item) => item.id !== action.payload);
    }
    case MOVE_POSTER_UP: {
      const index = statePart.findIndex((item) => item.id === action.payload);
      if (index >= 0 && statePart.length > 1) {
        const newStatePart = [...statePart];
        [newStatePart[index], newStatePart[index - 1]] = [
          newStatePart[index - 1],
          newStatePart[index],
        ];
        return newStatePart;
      } else {
        return statePart;
      }
    }
    case MOVE_POSTER_DOWN: {
      const index = statePart.findIndex((item) => item.id === action.payload);
      if (index >= 0 && statePart.length > 1) {
        const newStatePart = [...statePart];
        [newStatePart[index], newStatePart[index + 1]] = [
          newStatePart[index + 1],
          newStatePart[index],
        ];
        return newStatePart;
      } else {
        return statePart;
      }
    }
    case REMOVE_ALL_POSTERS: {
      return [];
    }
    case SET_POSTERS: {
      return action.payload.value;
    }
    default:
      return statePart;
  }
}

// case INCREASE_AMOUNT: {
//   return statePart.map((item) => {
//     if (item.productId !== action.payload) {
//       return item;
//     }
//     return {
//       ...item,
//       amountAll: item.amountAll + 1,
//     };
//   });
// }

// case DECREASE_AMOUNT: {
//   return statePart.map((item) => {
//     if (item.productId !== action.payload) {
//       return item;
//     }
//     const decreaseItem =
//       item.amountAll > 1 ? item.amountAll - 1 : item.amountAll;
//     return {
//       ...item,
//       amountAll: decreaseItem,
//     };
//   });
// }
