/* SELECTORS */

export const getEverything = ( state ) => state;

// action name creator
const reducerName = 'everything';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
const DELETE_EVERYTHING = createActionName('DELETE_EVERYTHING');

// action creators
export const deleteEverything = (items) => ({ payload : {items}, type: DELETE_EVERYTHING });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    // case SET_EVERYTHING: {
    //   return 
    //   '{"posters":[{"id":"01","posterName":"poster01","xPosterPosition":0,"yPosterPosition":0,"posterWidth":220,"posterHeight":160,"pictureName":"Saturn","posterDimensionsName":"18x12","angle":0}],"chosenPoster":{"id":0,"startPosterPositionX":0,"startPosterPositionY":0,"startClickPositionX":0,"startClickPositionY":0},"pictures":[{"pictureName":"Saturn","url":"/images/Saturn.jpg"},{"pictureName":"Jupiter","url":"/images/Jupiter.jpg"},{"pictureName":"Mars","url":"/images/Mars.jpg"},{"pictureName":"Space01","url":"/images/Space01.jpg"},{"pictureName":"Space02","url":"/images/Space02.jpg"},{"pictureName":"Space03","url":"/images/Space03.jpg"},{"pictureName":"Venus","url":"/images/Venus.jpg"},{"pictureName":"kosmos01","url":"/images/kosmos01.jpg"},{"pictureName":"kosmos02","url":"/images/kosmos02.jpg"},{"pictureName":"kosmos03","url":"/images/kosmos03.jpg"},{"pictureName":"blackhole","url":"/images/blackhole.jpg"},{"pictureName":"blackholeNASA","url":"/images/blackholeNASA.jpg"}],"backgroundWalls":[{"backgroundWallName":"backgroundWall01","url":"/images/backgroundWall01.png"},{"backgroundWallName":"backgroundWall02","url":"/images/backgroundWall02.png"},{"backgroundWallName":"backgroundWall03","url":"/images/backgroundWall03.jpg"},{"backgroundWallName":"backgroundWall04","url":"/images/backgroundWall04.png"},{"backgroundWallName":"backgroundWall05","url":"/images/backgroundWall05.jpg"}],"selectedBackgroundWallName":"backgroundWall02","posterDimensions":[{"posterDimensionsName":"18x12","w":18,"h":12},{"posterDimensionsName":"20x16","w":20,"h":16},{"posterDimensionsName":"08x11","w":8,"h":11}],"globalScale":4,"everything":[]}',
    // }        
    // default:
    //   return statePart;

    case DELETE_EVERYTHING: {  
      console.log('state:', state);    
      return state;
    } 
    default:
      return state;

  }
}
