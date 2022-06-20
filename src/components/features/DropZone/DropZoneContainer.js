import { connect } from 'react-redux';
import DropZone from './DropZone';
import { setPosters } from '../../../redux/postersRedux';
import { getSelectedBackgroundWallNameByProjectName, setSelectedBackgroundWallName } from '../../../redux/selectedBackgroundWallNameRedux';
import { setGlobalScaleByProjectName, setGlobalScale } from '../../../redux/scaleRedux';
import { getSelectedProjectName } from '../../../redux/selectedProjectNameRedux';
import { getEverything } from '../../../redux/everythingRedux';

const mapStateToProps = (state) => ({
  everything: getEverything(state),
  selectedProjectName: getSelectedProjectName(state),
  selectedBackgroundWallNameByProjectName: getSelectedBackgroundWallNameByProjectName(state, state.selectedProjectName),
});

const mapDispatchToProps = dispatch => ({
  setGlobalScaleByProjectName: (scale, projectName) => dispatch(setGlobalScaleByProjectName(scale, projectName)),
  setPosters: (value) => dispatch(setPosters(value)),
  setGlobalScale: (value) => dispatch(setGlobalScale(value)),
  setSelectedBackgroundWallName: (backgroundWallName) => dispatch(setSelectedBackgroundWallName(backgroundWallName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);
