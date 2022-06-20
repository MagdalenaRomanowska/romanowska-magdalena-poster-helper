/* action name creator */
const reducerName = 'selectedProjectName';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_SELECTED_PROJECT_NAME = createActionName('SET_SELECTED_PROJECT_NAME');
const SET_DEFAULT_SELECTED_PROJECT_NAME = createActionName('SET_DEFAULT_SELECTED_PROJECT_NAME');
const REMOVE_SELECTED_PROJECT_NAME = createActionName('REMOVE_SELECTED_PROJECT_NAME');

export const setSelectedProjectName = (value) => ({ payload: {value}, type: SET_SELECTED_PROJECT_NAME });
export const setDefaultSelectedProjectName = (value) => ({ payload: {value}, type: SET_DEFAULT_SELECTED_PROJECT_NAME });
export const removeSelectedProjectName = () => ({ type: REMOVE_SELECTED_PROJECT_NAME });

export const getSelectedProjectName = (store) => {
  return store.selectedProjectName;
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {   
    case SET_SELECTED_PROJECT_NAME: {
      return  action.payload.value;
    }  
    case SET_DEFAULT_SELECTED_PROJECT_NAME: {
      return  action.payload.value;
    }  
    case REMOVE_SELECTED_PROJECT_NAME: {
      return  '';
    }  
    default:
      return statePart;
  }
}
