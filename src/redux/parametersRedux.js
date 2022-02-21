/* SELECTORS */

export const getAllParameters = ({ parameters }) => parameters;

// action name creator
const reducerName = 'parameter';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
const SET_NAME = createActionName('SET_NAME');
const SET_XPOSITION = createActionName('SET_XPOSITION');
const SET_YPOSITION = createActionName('SET_YPOSITION');
const SET_POSTERWIDTH = createActionName('SET_POSTERWIDTH');
const SET_POSTERHEIGHT = createActionName('SET_POSTERHEIGHT');
const ADD_POSTER = createActionName('ADD_POSTER');

// action creators
export const setName = (id, posterName) => ({ payload: {id, posterName}, type: SET_NAME });
export const setXPosition = (id, xPosition) => ({ payload: {id, xPosition}, type: SET_XPOSITION });
export const setYPosition = (id, yPosition) => ({ payload: {id, yPosition}, type: SET_YPOSITION });
export const setPosterWidth = (id, posterWidth) => ({ payload: {id, posterWidth}, type: SET_POSTERWIDTH });
export const setPosterHeight = (id, posterHeight) => ({ payload: {id, posterHeight}, type: SET_POSTERHEIGHT });
export const addPoster = (payload) => ({ payload, type: ADD_POSTER });

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
    case SET_XPOSITION: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          xPosition: parseInt(action.payload.xPosition),
        };
      });
    }
    case SET_YPOSITION: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          yPosition: parseInt(action.payload.yPosition),
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
    default:
      return statePart;
  }
}
