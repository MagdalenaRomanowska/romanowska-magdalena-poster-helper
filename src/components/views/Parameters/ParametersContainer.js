import {connect} from 'react-redux';
import Parameters from './Parameters';
import {getAllParameters, setXPosterPosition, setYPosterPosition, setPosterAngle, setPosterWidth, setPosterHeight, 
  setPictureName, setPosterDimensionsName, getPosterDimensionsNameByPosterID } from '../../../redux/parametersRedux';
import { getAllPictures } from '../../../redux/picturesRedux';
import { getAllPosterDimensions } from '../../../redux/posterDimensionsRedux';
import { getPosterWidthByPictureName, getPosterHeightByPictureName } from '../../../redux/posterDimensionsRedux';

const mapStateToProps = (state, props) => ({
  parameters: getAllParameters(state),
  pictures: getAllPictures(state),
  posterDimensions: getAllPosterDimensions(state),
  posterWidth: getPosterWidthByPictureName(state, getPosterDimensionsNameByPosterID(state, props.chosenPosterID)),
  posterHeight: getPosterHeightByPictureName(state, getPosterDimensionsNameByPosterID(state, props.chosenPosterID)),
});

const mapDispatchToProps = dispatch => ({
  setXPosterPosition: (posterId, xPosterPosition) => dispatch(setXPosterPosition(posterId, xPosterPosition)),
  setYPosterPosition: (posterId, yPosterPosition) => dispatch(setYPosterPosition(posterId, yPosterPosition)),
  setPosterAngle: (posterId, angle) => dispatch(setPosterAngle(posterId, angle)),
  setPosterWidth: (posterId, posterWidth) => dispatch(setPosterWidth(posterId, posterWidth)),
  setPosterHeight: (posterId, posterHeight) => dispatch(setPosterHeight(posterId, posterHeight)),
  setPictureName: (posterId, pictureName) => dispatch(setPictureName(posterId, pictureName)),
  setPosterDimensionsName: (posterId, posterDimensionsName) => dispatch(setPosterDimensionsName(posterId, posterDimensionsName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Parameters);
