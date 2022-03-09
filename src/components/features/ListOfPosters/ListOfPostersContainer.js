import { connect } from 'react-redux';
import ListOfPosters from './ListOfPosters';
import { getPosterParameters, getAllParameters, movePosterByDeltaX, movePosterByDeltaY, setXPosition, setYPosition } from '../../../redux/parametersRedux';
import { getChosenPosterId, setChosenPosterID, getStartPosterPositionX, getStartPosterPositionY, getStartClickPositionX, getStartClickPositionY } from '../../../redux/chosenPosterIDRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
  posterParameters: getPosterParameters(state, state.chosenPosterID.value),
  chosenPosterId: getChosenPosterId(state),
  startPosterPositionX: getStartPosterPositionX(state),
  startPosterPositionY: getStartPosterPositionY(state),
  startClickPositionX: getStartClickPositionX(state),
  startClickPositionY: getStartClickPositionY(state),
});

const mapDispatchToProps = dispatch => ({
  setXPosition: (posterId, xPosition) => dispatch(setXPosition(posterId, xPosition)),
  setYPosition: (posterId, yPosition) => dispatch(setYPosition(posterId, yPosition)),
  setChosenPosterID: (value) => dispatch(setChosenPosterID(value)),
  movePosterByDeltaX: (id, deltaX) => dispatch(movePosterByDeltaX(id, deltaX)),
  movePosterByDeltaY: (id, deltaY) => dispatch(movePosterByDeltaY(id, deltaY)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPosters);