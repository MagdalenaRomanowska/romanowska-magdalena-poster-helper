import {connect} from 'react-redux';
import Poster from './Poster';
import { getPosterParameters, getAllPosters, setXPosterPosition, setYPosterPosition, setPosterAngle, setPosterWidth, setPosterHeight, 
  getPictureNameByPosterID, getPosterDimensionsNameByPosterID } from '../../../redux/parametersRedux';
import { getChosenPosterId, setChosenPosterID, setStartPosterPositionX, setStartPosterPositionY, setStartClickPositionX, setStartClickPositionY } from '../../../redux/chosenPosterIDRedux';
import { getURLByPictureName } from '../../../redux/picturesRedux';
import { getPosterWidthByPictureName, getPosterHeightByPictureName } from '../../../redux/posterDimensionsRedux';
import { getGlobalScale } from '../../../redux/scaleRedux';

const mapStateToProps = (state, props) => ({
  posters: getAllPosters(state),
  posterParameters: getPosterParameters(state, props.id),
  chosenPosterId: getChosenPosterId(state),
  pictureURL: getURLByPictureName(state, getPictureNameByPosterID(state, props.id)),    
  posterWidth: getPosterWidthByPictureName(state, getPosterDimensionsNameByPosterID(state, props.id)),
  posterHeight: getPosterHeightByPictureName(state, getPosterDimensionsNameByPosterID(state, props.id)),
  globalScale: getGlobalScale(state),
});


const mapDispatchToProps = dispatch => ({
  setXPosterPosition: (posterId, xPosterPosition) => dispatch(setXPosterPosition(posterId, xPosterPosition)),
  setYPosterPosition: (posterId, yPosterPosition) => dispatch(setYPosterPosition(posterId, yPosterPosition)),
  setPosterAngle: (posterId, posterAngle) => dispatch(setPosterAngle(posterId, posterAngle)),
  setPosterWidth: (posterId, posterWidth) => dispatch(setPosterWidth(posterId, posterWidth)),
  setPosterHeight: (posterId, posterHeight) => dispatch(setPosterHeight(posterId, posterHeight)),
  setChosenPosterID: (value) => dispatch(setChosenPosterID(value)),  
  setStartPosterPositionX: (startPosterPositionX) => dispatch(setStartPosterPositionX(startPosterPositionX)),  
  setStartPosterPositionY: (startPosterPositionY) => dispatch(setStartPosterPositionY(startPosterPositionY)),  
  setStartClickPositionX: (startClickPositionX) => dispatch(setStartClickPositionX(startClickPositionX)),  
  setStartClickPositionY: (startClickPositionY) => dispatch(setStartClickPositionY(startClickPositionY)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Poster);
