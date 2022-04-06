import { connect } from 'react-redux';
import DropZone from './DropZone';
import { setPosters } from '../../../redux/postersRedux';
import { setSelectedBackgroundWallNameByProjectName } from '../../../redux/selectedBackgroundWallNameRedux';
import { setGlobalScaleByProjectName } from '../../../redux/scaleRedux';

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = dispatch => ({
  setGlobalScaleByProjectName: (scale, projectName) => dispatch(setGlobalScaleByProjectName(scale, projectName)),
  setSelectedBackgroundWallNameByProjectName: (backgroundWallName, projectName) => dispatch(setSelectedBackgroundWallNameByProjectName(backgroundWallName, projectName)),
  setPosters: (value) => dispatch(setPosters(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);
