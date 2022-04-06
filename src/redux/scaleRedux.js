/* action name creator */
const reducerName = 'scale';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_GLOBAL_SCALE = createActionName('SET_GLOBAL_SCALE');

/* action creators */
export const setGlobalScale = (scale, projectName) => ({ payload: {scale, projectName}, type: SET_GLOBAL_SCALE });

/* SELECTORS */
export const getGlobalScaleByProjectName = ({ globalScales }, projectName) => {
  const filtered = globalScales.filter((gS) => gS.projectName === projectName);
  return filtered.length ? filtered[0].scale : { error: true };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {   
    case SET_GLOBAL_SCALE: {
      return statePart.map((item) => {
        if (item.projectName !== action.payload.projectName) {
          return item;
        }
        return {
          ...item,
          scale: parseInt(action.payload.scale),
        };
      });
    } 
    default:
      return statePart;
  }
}
