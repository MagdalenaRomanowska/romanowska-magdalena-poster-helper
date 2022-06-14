/* action name creator */
const reducerName = 'picture';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const SET_CHOSEN_PICTURE_ID = createActionName('SET_CHOSEN_PICTURE_ID');

/* action creators */

export const setChosenPictureID = (id) => ({ id, type: SET_CHOSEN_PICTURE_ID }); 

export const getChosenPictureId = (store) => {
  return store.chosenPicture.id;
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    
    case SET_CHOSEN_PICTURE_ID: {
      return {
        ...statePart,
        id: action.id,
      };
    }   
    default:
      return statePart;
  }
}