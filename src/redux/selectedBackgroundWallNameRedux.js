/* action name creator */
const reducerName = 'selectedBackgroundWallName';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_SELECTED_BACKGROUNDWALLNAME_BY_PROJECT_NAME = createActionName('SET_SELECTED_BACKGROUNDWALLNAME_BY_PROJECT_NAME');
export const setSelectedBackgroundWallNameByProjectName = (backgroundWallName, projectName) => ({ payload: {backgroundWallName, projectName}, type: SET_SELECTED_BACKGROUNDWALLNAME_BY_PROJECT_NAME });

export const getSelectedBackgroundWallName = (store) => {
  return store.selectedBackgroundWallName;
};

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
    default:
      return statePart;
  }
}
