import { connect } from 'react-redux';
import DropZone from './DropZone';
import { setPosters } from '../../../redux/parametersRedux';
import { setSelectedBackgroundWallName } from '../../../redux/selectedBackgroundWallNameRedux';
import { setGlobalScale } from '../../../redux/scaleRedux';

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = dispatch => ({
  setGlobalScale: (value) => dispatch(setGlobalScale(value)),
  setSelectedBackgroundWallName: (backgroundWallName) => dispatch(setSelectedBackgroundWallName(backgroundWallName)),
  setPosters: (value) => dispatch(setPosters(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);
