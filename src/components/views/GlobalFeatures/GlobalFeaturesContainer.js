import { connect } from 'react-redux';
import GlobalFeatures from './GlobalFeatures';
import { setGlobalScaleByProjectName, getGlobalScaleByProjectName } from '../../../redux/scaleRedux';
import { setSelectedBackgroundWallNameByProjectName, getSelectedBackgroundWallName, getSelectedBackgroundWallNameByProjectName } from '../../../redux/selectedBackgroundWallNameRedux';
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
  setGlobalScaleByProjectName: (scale, projectName) => dispatch(setGlobalScaleByProjectName(scale, projectName)),
  setSelectedBackgroundWallNameByProjectName: (backgroundWallName, projectName) => dispatch(setSelectedBackgroundWallNameByProjectName(backgroundWallName, projectName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFeatures);