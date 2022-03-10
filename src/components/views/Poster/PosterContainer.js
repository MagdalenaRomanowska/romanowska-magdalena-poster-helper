import {connect} from 'react-redux';
import Poster from './Poster';
import { getPosterParameters, getAllParameters, setXPosterPosition, setYPosterPosition, setPosterWidth, setPosterHeight, getPictureNameByPosterID } from '../../../redux/parametersRedux';
import { getChosenPosterId, setChosenPosterID, setStartPosterPositionX, setStartPosterPositionY, setStartClickPositionX, setStartClickPositionY } from '../../../redux/chosenPosterIDRedux';
import { getURLByPictureName } from '../../../redux/picturesRedux';

const mapStateToProps = (state, props) => ({
  parameters: getAllParameters(state),
  posterParameters: getPosterParameters(state, props.id),
  chosenPosterId: getChosenPosterId(state),
  pictureURL: getURLByPictureName(state, getPictureNameByPosterID(state, props.id)),
  //pictureURL: getURLByPictureName(state, 'Jupiter'),
});


const mapDispatchToProps = dispatch => ({
  setXPosterPosition: (posterId, xPosterPosition) => dispatch(setXPosterPosition(posterId, xPosterPosition)),
  setYPosterPosition: (posterId, yPosterPosition) => dispatch(setYPosterPosition(posterId, yPosterPosition)),
  setPosterWidth: (posterId, posterWidth) => dispatch(setPosterWidth(posterId, posterWidth)),
  setPosterHeight: (posterId, posterHeight) => dispatch(setPosterHeight(posterId, posterHeight)),
  setChosenPosterID: (value) => dispatch(setChosenPosterID(value)),  
  setStartPosterPositionX: (startPosterPositionX) => dispatch(setStartPosterPositionX(startPosterPositionX)),  
  setStartPosterPositionY: (startPosterPositionY) => dispatch(setStartPosterPositionY(startPosterPositionY)),  
  setStartClickPositionX: (startClickPositionX) => dispatch(setStartClickPositionX(startClickPositionX)),  
  setStartClickPositionY: (startClickPositionY) => dispatch(setStartClickPositionY(startClickPositionY)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Poster);
