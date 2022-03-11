/* SELECTORS */

export const getAllPosterDimensions = ({ posterDimensions }) => posterDimensions;

// action name creator
const reducerName = 'picture';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types

// action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {    
    default:
      return statePart;
  }
}
