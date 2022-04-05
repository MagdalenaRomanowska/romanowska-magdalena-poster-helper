/* action name creator */

export const getAllProjectNames = ({ projectNames }) => projectNames;

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {        
    default:
      return statePart;
  }
}
