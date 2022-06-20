/* action name creator */
const reducerName = 'projectNames';
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getAllProjectNames = ({ projectNames }) => projectNames;

const REMOVE_ALL_PROJECT_NAMES = createActionName('REMOVE_ALL_PROJECT_NAMES');

// action creators
export const removeAllProjectNames = () => ({
  type: REMOVE_ALL_PROJECT_NAMES,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) { 
    case REMOVE_ALL_PROJECT_NAMES: {
      return [];      
    }       
    default:
      return statePart;
  }
}
