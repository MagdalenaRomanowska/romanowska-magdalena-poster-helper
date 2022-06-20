const reducerName = 'picture';
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getAllPictures = ({ pictures }) => pictures;
const ADD_PICTURE = createActionName('ADD_PICTURE');
const REMOVE_PICTURE = createActionName('REMOVE_PICTURE');
const REMOVE_ALL_PICTURES = createActionName('REMOVE_ALL_PICTURES');
const SET_NEW_PICTURE_NAME = createActionName('SET_NEW_PICTURE_NAME');
const SET_NEW_PICTURE_URL = createActionName('SET_NEW_PICTURE_URL');
const SET_PICTURES = createActionName('SET_PICTURES');

export const addPicture = (id) => ({ id, type: ADD_PICTURE });
export const removePicture = (id) => ({ id, type: REMOVE_PICTURE });
export const setNewPictureName = (id, pictureName) => ({
  payload: { id, pictureName },
  type: SET_NEW_PICTURE_NAME,
});
export const setNewPictureUrl = (id, pictureUrl) => ({
  payload: { id, pictureUrl },
  type: SET_NEW_PICTURE_URL,
});

export const setPictures = (value) => ({ value, type: SET_PICTURES });

export const getURLByPictureName = ({ pictures }, pictureName) => {
  const filtered = pictures.filter((p) => p.pictureName === pictureName);
  return filtered.length ? filtered[0].pictureUrl : { error: true };
};
export const removeAllPictures = () => ({
  type: REMOVE_ALL_PICTURES,
});

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
    case SET_NEW_PICTURE_NAME: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          pictureName: action.payload.pictureName,
        };
      });
    }
    case SET_NEW_PICTURE_URL: {
      return statePart.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          pictureUrl: action.payload.pictureUrl,
        };
      });
    }
    case REMOVE_ALL_PICTURES: {
      return [];      
    }
    case SET_PICTURES: {
      return action.value;
    }
    default:
      return statePart;
  }
}
