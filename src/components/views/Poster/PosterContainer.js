import {connect} from 'react-redux';
import Poster from './Poster';
import { getPosterParameters, getAllPostersByProjectName, setPosterAngle, setPosterWidth, setPosterHeight, 
  getPictureNameByPosterID, getPosterDimensionsNameByPosterID, removePoster } from '../../../redux/postersRedux';
import { getChosenPosterId, setChosenPosterID, setStartPosterPositionX, setStartPosterPositionY, setStartClickPositionX, setStartClickPositionY } from '../../../redux/chosenPosterIDRedux';
import { getURLByPictureName } from '../../../redux/picturesRedux';
import { getPosterWidthByPictureName, getPosterHeightByPictureName } from '../../../redux/posterDimensionsRedux';
import { getGlobalScaleByProjectName } from '../../../redux/scaleRedux';

const mapStateToProps = (state, props) => ({
  posters: getAllPostersByProjectName(state, state.selectedProjectName),
  posterParameters: getPosterParameters(state, props.id),
  chosenPosterId: getChosenPosterId(state),
  pictureURL: getURLByPictureName(state, getPictureNameByPosterID(state, props.id)),    
  posterWidth: getPosterWidthByPictureName(state, getPosterDimensionsNameByPosterID(state, props.id)),
  posterHeight: getPosterHeightByPictureName(state, getPosterDimensionsNameByPosterID(state, props.id)),
  globalScaleByProjectName: getGlobalScaleByProjectName(state, state.selectedProjectName),
});


const mapDispatchToProps = dispatch => ({  
  setPosterAngle: (posterId, posterAngle) => dispatch(setPosterAngle(posterId, posterAngle)),
  setPosterWidth: (posterId, posterWidth) => dispatch(setPosterWidth(posterId, posterWidth)),
  setPosterHeight: (posterId, posterHeight) => dispatch(setPosterHeight(posterId, posterHeight)),
  setChosenPosterID: (value) => dispatch(setChosenPosterID(value)),  
  setStartPosterPositionX: (startPosterPositionX) => dispatch(setStartPosterPositionX(startPosterPositionX)),  
  setStartPosterPositionY: (startPosterPositionY) => dispatch(setStartPosterPositionY(startPosterPositionY)),  
  setStartClickPositionX: (startClickPositionX) => dispatch(setStartClickPositionX(startClickPositionX)),  
  setStartClickPositionY: (startClickPositionY) => dispatch(setStartClickPositionY(startClickPositionY)),
  removePoster: (posterId) => dispatch(removePoster(posterId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Poster);
