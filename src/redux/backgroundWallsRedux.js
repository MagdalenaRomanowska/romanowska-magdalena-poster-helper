/* action name creator */
const reducerName = 'scale';
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getAllBackgroundWalls = ({ backgroundWalls }) => backgroundWalls;

// action creators
export const getURLByBackgroundWallName = ({ backgroundWalls }, backgroundWallName) => {
  const filtered = backgroundWalls.filter((b) => b.backgroundWallName === backgroundWallName);
  return filtered.length ? filtered[0].url : { error: true };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {        
    default:
      return statePart;
  }
}
