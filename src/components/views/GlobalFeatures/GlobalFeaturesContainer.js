import { connect } from 'react-redux';
import GlobalFeatures from './GlobalFeatures';
import { setGlobalScale, getGlobalScaleByProjectName } from '../../../redux/scaleRedux';
import { setSelectedBackgroundWallName, getSelectedBackgroundWallName, getSelectedBackgroundWallNameByProjectName } from '../../../redux/selectedBackgroundWallNameRedux';
import { getAllBackgroundWalls } from '../../../redux/backgroundWallsRedux';

const mapStateToProps = (state) => ({ 
  globalScaleByProjectName: getGlobalScaleByProjectName(state, state.selectedProjectName),
  backgroundWallNameByProjectName: getSelectedBackgroundWallNameByProjectName(state, state.selectedProjectName),
  selectedBackgroundWallName: getSelectedBackgroundWallName(state),
  backgroundWalls: getAllBackgroundWalls(state),
});

const mapDispatchToProps = dispatch => ({
  setGlobalScale: (value) => dispatch(setGlobalScale(value)),
  setSelectedBackgroundWallName: (backgroundWallName) => dispatch(setSelectedBackgroundWallName(backgroundWallName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFeatures);