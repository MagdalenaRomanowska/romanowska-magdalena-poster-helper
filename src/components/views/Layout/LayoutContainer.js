import { connect } from 'react-redux';
import Layout from './Layout';
import { getPosterParameters, getAllPosters, setXPosterPosition, setYPosterPosition } from '../../../redux/parametersRedux';
import { getChosenPosterId, setChosenPosterID, getStartPosterPositionX, getStartPosterPositionY, getStartClickPositionX, getStartClickPositionY } from '../../../redux/chosenPosterIDRedux';
import { getGlobalScale, setGlobalScale } from '../../../redux/scaleRedux';

const mapStateToProps = (state) => ({
  posters: getAllPosters(state),
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
  setGlobalScale: (value) => dispatch(setGlobalScale(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);