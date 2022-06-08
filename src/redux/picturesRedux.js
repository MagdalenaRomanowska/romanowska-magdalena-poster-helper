const reducerName = 'poster';
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getAllPictures = ({ pictures }) => pictures;
const ADD_PICTURE = createActionName('ADD_PICTURE');
const REMOVE_PICTURE = createActionName('REMOVE_PICTURE');

export const addPicture = (id) => ({ id, type: ADD_PICTURE });
export const removePicture = (id) => ({ id, type: REMOVE_PICTURE });

export const getURLByPictureName = ({ pictures }, pictureName) => {
  const filtered = pictures.filter((p) => p.pictureName === pictureName);
  return filtered.length ? filtered[0].url : { error: true };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {  
    case ADD_PICTURE: {
      let newArray = statePart.slice();
      newArray.push(action.id);
      return newArray;
    }  
    case REMOVE_PICTURE: {
      return statePart.filter((item) => item.id !== action.id);
    }
    default:
      return statePart;
  }
}
