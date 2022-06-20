/* action name creator */
const reducerName = 'posterDimensions';
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getAllPosterDimensions = ({ posterDimensions }) => posterDimensions;

export const getPosterWidthByPictureName = ({ posterDimensions }, pictureName) => {
  const filtered = posterDimensions.filter((p) => p.posterDimensionsName === pictureName);
  return filtered.length ? filtered[0].w : { error: true };
};

export const getPosterHeightByPictureName = ({ posterDimensions }, pictureName) => {
  const filtered = posterDimensions.filter((p) => p.posterDimensionsName === pictureName);
  return filtered.length ? filtered[0].h : { error: true };
};

const REMOVE_ALL_POSTER_DIMENSIONS = createActionName('REMOVE_ALL_POSTER_DIMENSIONS');

// action creators
export const removeAllPosterDimensions = () => ({
  type: REMOVE_ALL_POSTER_DIMENSIONS,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) { 
    case REMOVE_ALL_POSTER_DIMENSIONS: {
      return [];      
    }       
    default:
      return statePart;
  }
}
