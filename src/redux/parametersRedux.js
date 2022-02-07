/* SELECTORS */

export const getAllParameters = ({ parameters }) => parameters;

// action name creator
const reducerName = 'parameter';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
const SET_NAME = createActionName('SET_NAME');
const SET_XW1 = createActionName('SET_XW1');
const SET_YW1 = createActionName('SET_YW1');
const SET_R = createActionName('SET_R');
const SET_W1TEETH = createActionName('SET_W1TEETH');
const SET_W2TEETH = createActionName('SET_W2TEETH');
const SET_PENPOSITION = createActionName('SET_PENPOSITION');
const SET_SHOWOUTERWHEEL = createActionName('SET_SHOWOUTERWHEEL');
const SET_SHOWINNERWHEEL = createActionName('SET_SHOWINNERWHEEL');
const SET_SHOWPEN = createActionName('SET_SHOWPEN');
const SET_COLOR = createActionName('SET_COLOR');
const SET_GAMMA = createActionName('SET_GAMMA');
const ADD_SPIROGRAPH = createActionName('ADD_SPIROGRAPH');

// action creators
export const setName = (id, spirographName) => ({ payload: {id, spirographName}, type: SET_NAME });
export const setXW1 = (id, xW1) => ({ payload: {id, xW1}, type: SET_XW1 });
export const setYW1 = (id, yW1) => ({ payload: {id, yW1}, type: SET_YW1 });
export const setR = (id, r) => ({ payload: {id, r}, type: SET_R });
export const setW1Teeth = (id, w1Teeth) => ({ payload: {id, w1Teeth}, type: SET_W1TEETH });
export const setW2Teeth = (id, w2Teeth) => ({ payload: {id, w2Teeth}, type: SET_W2TEETH });
export const setPenPosition = (id, penPosition) => ({ payload: {id, penPosition}, type: SET_PENPOSITION });
export const setShowOuterWheel = (id, showOuterWheel) => ({ payload: {id, showOuterWheel}, type: SET_SHOWOUTERWHEEL });
export const setShowInnerWheel = (id, showInnerWheel) => ({ payload: {id, showInnerWheel}, type: SET_SHOWINNERWHEEL });
export const setShowPen = (id, showPen) => ({ payload: {id, showPen}, type: SET_SHOWPEN });
export const setColor = (id, color) => ({ payload: {id, color}, type: SET_COLOR });
export const setGamma = (id, gamma) => ({ payload: {id, gamma}, type: SET_GAMMA });
export const addSpirograph = (payload) => ({ payload, type: ADD_SPIROGRAPH });

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
          name: action.payload.spirographName,
        };
      });
    }
    case SET_XW1: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          xW1: parseInt(action.payload.xW1),
        };
      });
    }
    case SET_YW1: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          yW1: parseInt(action.payload.yW1),
        };
      });
    }
    case SET_R: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          r: parseInt(action.payload.r),
        };
      });
    }
    case SET_W1TEETH: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          w1Teeth: parseInt(action.payload.w1Teeth),
        };
      });
    }
    case SET_W2TEETH: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          w2Teeth: parseInt(action.payload.w2Teeth),
        };
      });
    }
    case SET_PENPOSITION: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          penPosition: action.payload.penPosition,
        };
      });
    }
    case SET_SHOWOUTERWHEEL: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          showOuterWheel: action.payload.showOuterWheel,
        };
      });
    }
    case SET_SHOWINNERWHEEL: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          showInnerWheel: action.payload.showInnerWheel,
        };
      });
    }
    case SET_SHOWPEN: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          showPen: action.payload.showPen,
        };
      });
    }
    case SET_COLOR: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          color: action.payload.color,
        };
      });
    }
    case SET_GAMMA: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          gamma: action.payload.gamma,
        };
      });
    }
    case ADD_SPIROGRAPH: {
      let newArray = statePart.slice();
      newArray.push(action.payload);
      return newArray;
    }
    default:
      return statePart;
  }
}
