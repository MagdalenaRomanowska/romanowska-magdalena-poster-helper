import {connect} from 'react-redux';
import BackgroundWall from './BackgroundWall';
import { getURLByBackgroundWallName } from '../../../redux/backgroundWallsRedux';
import { getSelectedBackgroundWallNameByProjectName } from '../../../redux/selectedBackgroundWallNameRedux';

const mapStateToProps = (state) => ({
  backgroundWallURL: getURLByBackgroundWallName(state, getSelectedBackgroundWallNameByProjectName(state, state.selectedProjectName)), 
});

export default connect(mapStateToProps)(BackgroundWall);