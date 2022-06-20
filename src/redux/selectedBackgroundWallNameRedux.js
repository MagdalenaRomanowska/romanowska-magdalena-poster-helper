/* action name creator */
const reducerName = 'selectedBackgroundWallName';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_SELECTED_BACKGROUNDWALLNAME_BY_PROJECT_NAME = createActionName('SET_SELECTED_BACKGROUNDWALLNAME_BY_PROJECT_NAME');
const SET_SELECTED_BACKGROUNDWALLNAME = createActionName('SET_SELECTED_BACKGROUNDWALLNAME');
const REMOVE_SELECTED_BACKGROUNDWALLNAMES = createActionName('REMOVE_SELECTED_BACKGROUNDWALLNAMES');
const SET_SELECTED_BACKGROUNDWALLNAMES = createActionName('SET_SELECTED_BACKGROUNDWALLNAMES');

export const setSelectedBackgroundWallNameByProjectName = (backgroundWallName, projectName) => ({ payload: {backgroundWallName, projectName}, type: SET_SELECTED_BACKGROUNDWALLNAME_BY_PROJECT_NAME });
export const setSelectedBackgroundWallName = (value) => ({ payload: {value}, type: SET_SELECTED_BACKGROUNDWALLNAME });
export const getSelectedBackgroundWallName = (store) => {
  return store.selectedBackgroundWallName;
};
export const removeSelectedBackgroundWallNames = () => ({
  type: REMOVE_SELECTED_BACKGROUNDWALLNAMES,
});
export const setSelectedBackgroundWallNames = (value) => ({ payload: {value}, type: SET_SELECTED_BACKGROUNDWALLNAMES });


// action creators
export const getURLByBackgroundWallName = ({ backgroundWalls }, backgroundWallName) => {
  const filtered = backgroundWalls.filter((b) => b.projectName === backgroundWallName);
  return filtered.length ? filtered[0].url : { error: true };
};

export const getSelectedBackgroundWallNameByProjectName = ({ selectedBackgroundWallNames }, projectName) => {
  const filtered = selectedBackgroundWallNames.filter((sB) => sB.projectName === projectName);
  return filtered.length ? filtered[0].backgroundWallName : { error: true };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {   
    case SET_SELECTED_BACKGROUNDWALLNAME_BY_PROJECT_NAME: {
      return statePart.map((item) => {
        if (item.projectName !== action.payload.projectName) {
          return item;
        }
        return {
          ...item,
          backgroundWallName: action.payload.backgroundWallName,
        };
      });
    }  
    case SET_SELECTED_BACKGROUNDWALLNAME: {
      return  action.payload.value;
    } 
    case REMOVE_SELECTED_BACKGROUNDWALLNAMES: {
      return  [];
    } 
    case SET_SELECTED_BACKGROUNDWALLNAMES: {
      return  action.payload.value;
    } 
    default:
      return statePart;
  }
}
