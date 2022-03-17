import { connect } from 'react-redux';
import GlobalFeatures from './GlobalFeatures';
import { getGlobalScale, setGlobalScale } from '../../../redux/scaleRedux';
import { setSelectedBackgroundWallName, getSelectedBackgroundWallName } from '../../../redux/selectedBackgroundWallNameRedux';
import { getAllBackgroundWalls } from '../../../redux/backgroundWallsRedux';

const mapStateToProps = (state) => ({  
  globalScale: getGlobalScale(state),
  selectedBackgroundWallName: getSelectedBackgroundWallName(state),
  backgroundWalls: getAllBackgroundWalls(state),
});

const mapDispatchToProps = dispatch => ({
  setGlobalScale: (value) => dispatch(setGlobalScale(value)),
  setSelectedBackgroundWallName: (backgroundWallName) => dispatch(setSelectedBackgroundWallName(backgroundWallName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFeatures);