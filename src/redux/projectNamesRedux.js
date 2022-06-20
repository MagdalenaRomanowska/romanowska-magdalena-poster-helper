/* action name creator */
const reducerName = 'projectNames';
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getAllProjectNames = ({ projectNames }) => projectNames;

const REMOVE_ALL_PROJECT_NAMES = createActionName('REMOVE_ALL_PROJECT_NAMES');
const SET_GLOBAL_PROJECT_NAMES = createActionName('SET_PROJECT_NAMES');

// action creators
export const removeAllProjectNames = () => ({
  type: REMOVE_ALL_PROJECT_NAMES,
});
export const setProjectNames = (value) => ({ payload: {value}, type: SET_GLOBAL_PROJECT_NAMES });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) { 
    case REMOVE_ALL_PROJECT_NAMES: {
      return [];      
    }      
    case SET_GLOBAL_PROJECT_NAMES: {
      return  action.payload.value;
    }  
    default:
      return statePart;
  }
}
