import {connect} from 'react-redux';
import ButtonSaveProject from './ButtonSaveProject';
import { getAllPosters, removeAllPosters } from '../../../redux/parametersRedux';
import { getEverything, deleteEverything } from '../../../redux/everythingRedux';

const mapStateToProps = (state) => ({
  posters: getAllPosters(state),
  everything: getEverything(state),
});

const mapDispatchToProps = dispatch => ({
  deleteEverything: (items) => dispatch(deleteEverything(items)),
  removeAllPosters: () => dispatch(removeAllPosters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSaveProject);
