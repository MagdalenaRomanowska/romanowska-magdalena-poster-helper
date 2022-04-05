/* action name creator */
const reducerName = 'selectedProjectName';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_SELECTED_PROJECT_NAME = createActionName('SET_SELECTED_PROJECT_NAME');
export const setSelectedProjectName = (value) => ({ payload: {value}, type: SET_SELECTED_PROJECT_NAME });

export const getSelectedProjectName = (store) => {
  return store.selectedProjectName;
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {   
    case SET_SELECTED_PROJECT_NAME: {
      return  action.payload.value;
    }  
    default:
      return statePart;
  }
}
