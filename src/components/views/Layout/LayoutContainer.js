import { connect } from 'react-redux';
import Layout from './Layout';
import { getPosterParameters, getAllPostersByProjectName, setXPosterPosition, setYPosterPosition, removeAllPosters } from '../../../redux/postersRedux';
import { removeAllPictures } from '../../../redux/picturesRedux';
import { getChosenPosterId, getStartPosterPositionX, getStartPosterPositionY, getStartClickPositionX, getStartClickPositionY } from '../../../redux/chosenPosterIDRedux';
import { getSelectedProjectName } from '../../../redux/selectedProjectNameRedux';
import { removeAllBackgroundWalls } from '../../../redux/backgroundWallsRedux';
import { removeChosenPoster } from '../../../redux/chosenPosterIDRedux';
import { removeSelectedBackgroundWallNames } from '../../../redux/selectedBackgroundWallNameRedux';
import { removeAllProjectNames } from '../../../redux/projectNamesRedux';
import { removeSelectedProjectName } from '../../../redux/selectedProjectNameRedux';
import { removeAllPosterDimensions } from '../../../redux/posterDimensionsRedux';
import { removeGlobalScale } from '../../../redux/scaleRedux';

const mapStateToProps = (state) => ({
  posters: getAllPostersByProjectName(state, state.selectedProjectName),
  posterParameters: getPosterParameters(state, state.chosenPoster.id),
  chosenPosterId: getChosenPosterId(state),
  startPosterPositionX: getStartPosterPositionX(state),
  startPosterPositionY: getStartPosterPositionY(state),
  startClickPositionX: getStartClickPositionX(state),
  startClickPositionY: getStartClickPositionY(state),
  selectedProjectName: getSelectedProjectName(state),
});

const mapDispatchToProps = dispatch => ({
  removeAllPosters: () => dispatch(removeAllPosters()),
  removeAllPictures: () => dispatch(removeAllPictures()),
  removeAllBackgroundWalls: () => dispatch(removeAllBackgroundWalls()),
  removeChosenPoster: () => dispatch(removeChosenPoster()),
  removeSelectedBackgroundWallNames: () => dispatch(removeSelectedBackgroundWallNames()),
  removeAllProjectNames: () => dispatch(removeAllProjectNames()),
  removeSelectedProjectName: () => dispatch(removeSelectedProjectName()),
  removeAllPosterDimensions: () => dispatch(removeAllPosterDimensions()),
  removeGlobalScale: () => dispatch(removeGlobalScale()),
  setXPosterPosition: (posterId, xPosterPosition) => dispatch(setXPosterPosition(posterId, xPosterPosition)),
  setYPosterPosition: (posterId, yPosterPosition) => dispatch(setYPosterPosition(posterId, yPosterPosition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);