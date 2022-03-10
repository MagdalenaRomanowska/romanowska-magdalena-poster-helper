/* SELECTORS */

export const getAllPictures = ({ pictures }) => pictures;

// action name creator
const reducerName = 'picture';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types

// action creators
export const getURLByPictureName = ({ pictures }, pictureName) => {
  const filtered = pictures.filter((p) => p.pictureName === pictureName);
  return filtered.length ? filtered[0].url : { error: true };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {    
    default:
      return statePart;
  }
}
