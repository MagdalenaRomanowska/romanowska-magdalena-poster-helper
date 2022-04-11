import { connect } from 'react-redux';
import DropZone from './DropZone';
import { setPosters } from '../../../redux/postersRedux';
import { getSelectedBackgroundWallNameByProjectName, setSelectedBackgroundWallNameByProjectName } from '../../../redux/selectedBackgroundWallNameRedux';
import { setGlobalScaleByProjectName } from '../../../redux/scaleRedux';
import { getSelectedProjectName } from '../../../redux/selectedProjectNameRedux';

const mapStateToProps = (state) => ({
  selectedProjectName: getSelectedProjectName(state),
  selectedBackgroundWallNameByProjectName: getSelectedBackgroundWallNameByProjectName(state, state.selectedProjectName),
});

const mapDispatchToProps = dispatch => ({
  setGlobalScaleByProjectName: (scale, projectName) => dispatch(setGlobalScaleByProjectName(scale, projectName)),
  setSelectedBackgroundWallNameByProjectName: (backgroundWallName, projectName) => dispatch(setSelectedBackgroundWallNameByProjectName(backgroundWallName, projectName)),
  setPosters: (value) => dispatch(setPosters(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);
