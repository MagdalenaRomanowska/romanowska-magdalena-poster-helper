import {connect} from 'react-redux';
import ButtonSaveProject from './ButtonSaveProject';
import { getAllPosters, removeAllPosters, setPosters } from '../../../redux/parametersRedux';
import { setSelectedBackgroundWallName } from '../../../redux/selectedBackgroundWallNameRedux';
import { getEverything } from '../../../redux/everythingRedux';
import { setGlobalScale } from '../../../redux/scaleRedux';

const mapStateToProps = (state) => ({
  posters: getAllPosters(state),
  everything: getEverything(state),
});

const mapDispatchToProps = dispatch => ({
  removeAllPosters: () => dispatch(removeAllPosters()),
  setGlobalScale: (value) => dispatch(setGlobalScale(value)),
  setSelectedBackgroundWallName: (backgroundWallName) => dispatch(setSelectedBackgroundWallName(backgroundWallName)),
  setPosters: (value) => dispatch(setPosters(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSaveProject);
