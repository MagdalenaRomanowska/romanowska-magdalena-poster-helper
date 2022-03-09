/* SELECTORS */

export const getAllParameters = ({ parameters }) => parameters;

// action name creator
const reducerName = 'parameter';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
const SET_NAME = createActionName('SET_NAME');
const SET_XPOSTERPOSITION = createActionName('SET_XPOSTERPOSITION');
const SET_YPOSTERPOSITION = createActionName('SET_YPOSTERPOSITION');
const SET_POSTERWIDTH = createActionName('SET_POSTERWIDTH');
const SET_POSTERHEIGHT = createActionName('SET_POSTERHEIGHT');
const ADD_POSTER = createActionName('ADD_POSTER');
const MOVE_BYDELTAX = createActionName('MOVE_BYDELTAX');
const MOVE_BYDELTAY = createActionName('MOVE_BYDELTAY');

// action creators
export const setName = (id, posterName) => ({ payload: {id, posterName}, type: SET_NAME });
export const setXPosterPosition = (id, xPosterPosition) => ({ payload: {id, xPosterPosition}, type: SET_XPOSTERPOSITION });
export const setYPosterPosition = (id, yPosterPosition) => ({ payload: {id, yPosterPosition}, type: SET_YPOSTERPOSITION });
export const setPosterWidth = (id, posterWidth) => ({ payload: {id, posterWidth}, type: SET_POSTERWIDTH });
export const setPosterHeight = (id, posterHeight) => ({ payload: {id, posterHeight}, type: SET_POSTERHEIGHT });
export const addPoster = (payload) => ({ payload, type: ADD_POSTER });
export const movePosterByDeltaX =(id, deltaX) => ({ payload: {id, deltaX}, type: MOVE_BYDELTAX });
export const movePosterByDeltaY =(id, deltaY) => ({ payload: {id, deltaY}, type: MOVE_BYDELTAY });

export const getPosterParameters = ({ parameters }, posterId) => {
  const filtered = parameters.filter((p) => p.id === posterId);
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
    case SET_XPOSTERPOSITION: {
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
    case SET_YPOSTERPOSITION: {
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
    case SET_POSTERWIDTH: {
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
    case SET_POSTERHEIGHT: {
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
    case ADD_POSTER: {
      let newArray = statePart.slice();
      newArray.push(action.payload);
      return newArray;
    }
    case MOVE_BYDELTAX: {
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
    case MOVE_BYDELTAY: {
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
