/* action name creator */
const reducerName = 'scale';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_SELECTED_BACKGROUNDWALLNAME = createActionName('SET_SELECTED_BACKGROUNDWALLNAME');
export const setSelectedBackgroundWallName = (value) => ({ payload: {value}, type: SET_SELECTED_BACKGROUNDWALLNAME });

export const getSelectedBackgroundWallName = (store) => {
  return store.selectedBackgroundWallName;
};

// action creators
export const getURLByBackgroundWallName = ({ backgroundWalls }, backgroundWallName) => {
  const filtered = backgroundWalls.filter((b) => b.backgroundWallName === backgroundWallName);
  return filtered.length ? filtered[0].url : { error: true };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {   
    case SET_SELECTED_BACKGROUNDWALLNAME: {
      return  action.payload.value;
    }  
    default:
      return statePart;
  }
}
