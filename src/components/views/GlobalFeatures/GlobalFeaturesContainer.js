import { connect } from 'react-redux';
import GlobalFeatures from './GlobalFeatures';
import { setGlobalScale, getGlobalScaleByProjectName } from '../../../redux/scaleRedux';
import { setSelectedBackgroundWallName, getSelectedBackgroundWallName, getSelectedBackgroundWallNameByProjectName } from '../../../redux/selectedBackgroundWallNameRedux';
import { getAllBackgroundWalls } from '../../../redux/backgroundWallsRedux';
import { getSelectedProjectName } from '../../../redux/selectedProjectNameRedux';

const mapStateToProps = (state) => ({ 
  globalScaleByProjectName: getGlobalScaleByProjectName(state, state.selectedProjectName),
  backgroundWallNameByProjectName: getSelectedBackgroundWallNameByProjectName(state, state.selectedProjectName),
  selectedBackgroundWallName: getSelectedBackgroundWallName(state),
  selectedProjectName: getSelectedProjectName(state),
  backgroundWalls: getAllBackgroundWalls(state),
});

const mapDispatchToProps = dispatch => ({
  setGlobalScale: (scale, projectName) => dispatch(setGlobalScale(scale, projectName)),
  setSelectedBackgroundWallName: (backgroundWallName) => dispatch(setSelectedBackgroundWallName(backgroundWallName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFeatures);