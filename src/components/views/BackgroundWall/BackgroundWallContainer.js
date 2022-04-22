import {connect} from 'react-redux';
import BackgroundWall from './BackgroundWall';
import { getURLByBackgroundWallName } from '../../../redux/backgroundWallsRedux';
import { getSelectedBackgroundWallNameByProjectName } from '../../../redux/selectedBackgroundWallNameRedux';
import { getChosenPosterId, setChosenPosterID, setStartPosterPositionX, setStartPosterPositionY, setStartClickPositionX, setStartClickPositionY } from '../../../redux/chosenPosterIDRedux';
import { getPosterParameters } from '../../../redux/postersRedux';

const mapStateToProps = (state, props) => ({
  backgroundWallURL: getURLByBackgroundWallName(state, getSelectedBackgroundWallNameByProjectName(state, state.selectedProjectName)), 
  chosenPosterId: getChosenPosterId(state),
  posterParameters: getPosterParameters(state, props.id),
});

const mapDispatchToProps = dispatch => ({      
  setChosenPosterID: (id) => dispatch(setChosenPosterID(id)),  
  setStartPosterPositionX: (startPosterPositionX) => dispatch(setStartPosterPositionX(startPosterPositionX)),  
  setStartPosterPositionY: (startPosterPositionY) => dispatch(setStartPosterPositionY(startPosterPositionY)),  
  setStartClickPositionX: (startClickPositionX) => dispatch(setStartClickPositionX(startClickPositionX)),  
  setStartClickPositionY: (startClickPositionY) => dispatch(setStartClickPositionY(startClickPositionY)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundWall);