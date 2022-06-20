/* action name creator */
const reducerName = 'backgroundWalls';
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getAllBackgroundWalls = ({ backgroundWalls }) => backgroundWalls;

const REMOVE_ALL_BACKGROUNDWALLS = createActionName('REMOVE_ALL_BACKGROUNDWALLS');
const SET_BACKGROUNDWALLS = createActionName('SET_BACKGROUNDWALLS');

// action creators
export const getURLByBackgroundWallName = ({ backgroundWalls }, backgroundWallName) => {
  const filtered = backgroundWalls.filter((b) => b.backgroundWallName === backgroundWallName);
  return filtered.length ? filtered[0].url : { error: true };
};
export const removeAllBackgroundWalls = () => ({
  type: REMOVE_ALL_BACKGROUNDWALLS,
});

export const setBackgroundWalls = (value) => ({ value, type: SET_BACKGROUNDWALLS });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) { 
    case REMOVE_ALL_BACKGROUNDWALLS: {
      return [];      
    }       
    case SET_BACKGROUNDWALLS: {
      return action.value;
    }
    default:
      return statePart;
  }
}
