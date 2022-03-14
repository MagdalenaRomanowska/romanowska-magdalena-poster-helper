/* SELECTORS */

export const getAllPosterDimensions = ({ posterDimensions }) => posterDimensions;

export const getPosterWidthByPictureName = ({ posterDimensions }, pictureName) => {
  const filtered = posterDimensions.filter((p) => p.posterDimensionsName === pictureName);
  return filtered.length ? filtered[0].w : { error: true };
};

export const getPosterHeightByPictureName = ({ posterDimensions }, pictureName) => {
  const filtered = posterDimensions.filter((p) => p.posterDimensionsName === pictureName);
  return filtered.length ? filtered[0].h : { error: true };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {    
    default:
      return statePart;
  }
}
