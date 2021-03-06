/* action name creator */
const reducerName = 'scale';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_GLOBAL_SCALE_BY_PROJECT_NAME = createActionName('SET_GLOBAL_SCALE_BY_PROJECT_NAME');
const SET_GLOBAL_SCALES = createActionName('SET_GLOBAL_SCALES');
const REMOVE_GLOBAL_SCALE = createActionName('REMOVE_GLOBAL_SCALE');

/* action creators */
export const setGlobalScaleByProjectName = (scale, projectName) => ({ payload: {scale, projectName}, type: SET_GLOBAL_SCALE_BY_PROJECT_NAME });
export const setGlobalScales = (value) => ({ payload: {value}, type: SET_GLOBAL_SCALES });
export const removeGlobalScale = () => ({ type: REMOVE_GLOBAL_SCALE });

/* SELECTORS */
export const getGlobalScaleByProjectName = ({ globalScales }, projectName) => {
  const filtered = globalScales.filter((gS) => gS.projectName === projectName);
  return filtered.length ? filtered[0].scale : { error: true };
};

export const getGlobalScale = (store) => {
  return store.globalScale;
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {   
    case SET_GLOBAL_SCALE_BY_PROJECT_NAME: {
      return statePart.map((item) => {
        if (item.projectName !== action.payload.projectName) {
          return item;
        }
        return {
          ...item,
          scale: action.payload.scale,
        };
      });
    }
    case SET_GLOBAL_SCALES: {
      return  action.payload.value;
    }  
    case REMOVE_GLOBAL_SCALE: {
      return  [];
    } 
    default:
      return statePart;
  }
}
