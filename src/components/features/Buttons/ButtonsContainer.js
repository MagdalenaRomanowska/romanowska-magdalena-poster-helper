import {connect} from 'react-redux';
import Buttons from './Buttons';
import { removeAllPosters, addPoster } from '../../../redux/postersRedux';
import { getEverything } from '../../../redux/everythingRedux';
import { getSelectedProjectName } from '../../../redux/selectedProjectNameRedux';

const mapStateToProps = (state) => ({
  everything: getEverything(state),
  selectedProjectName: getSelectedProjectName(state),
});

const mapDispatchToProps = dispatch => ({
  removeAllPosters: (projectName) => dispatch(removeAllPosters(projectName)),
  addPoster: (order) => dispatch(addPoster(order)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
