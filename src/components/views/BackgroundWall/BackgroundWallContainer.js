import {connect} from 'react-redux';
import BackgroundWall from './BackgroundWall';
import { getURLByBackgroundWallName } from '../../../redux/backgroundWallsRedux';

const mapStateToProps = (state) => ({
  backgroundWallURL: getURLByBackgroundWallName(state, state.selectedBackgroundWallName), 
});

export default connect(mapStateToProps)(BackgroundWall);