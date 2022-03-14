import { connect } from 'react-redux';
import ListOfPosters from './ListOfPosters';
import { getPosterParameters, getAllParameters, movePosterByDeltaX, movePosterByDeltaY, setXPosterPosition, setYPosterPosition } from '../../../redux/parametersRedux';
import { getChosenPosterId, setChosenPosterID, getStartPosterPositionX, getStartPosterPositionY, getStartClickPositionX, getStartClickPositionY } from '../../../redux/chosenPosterIDRedux';
import { getGlobalScale, setGlobalScale } from '../../../redux/scaleRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
  posterParameters: getPosterParameters(state, state.chosenPoster.id),
  chosenPosterId: getChosenPosterId(state),
  startPosterPositionX: getStartPosterPositionX(state),
  startPosterPositionY: getStartPosterPositionY(state),
  startClickPositionX: getStartClickPositionX(state),
  startClickPositionY: getStartClickPositionY(state),
  globalScale: getGlobalScale(state),
});

const mapDispatchToProps = dispatch => ({
  setXPosterPosition: (posterId, xPosterPosition) => dispatch(setXPosterPosition(posterId, xPosterPosition)),
  setYPosterPosition: (posterId, yPosterPosition) => dispatch(setYPosterPosition(posterId, yPosterPosition)),
  setChosenPosterID: (value) => dispatch(setChosenPosterID(value)),
  movePosterByDeltaX: (id, deltaX) => dispatch(movePosterByDeltaX(id, deltaX)),
  movePosterByDeltaY: (id, deltaY) => dispatch(movePosterByDeltaY(id, deltaY)),
  setGlobalScale: (value) => dispatch(setGlobalScale(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPosters);