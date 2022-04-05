import {connect} from 'react-redux';
import Buttons from './Buttons';
import { removeAllPosters, addPoster } from '../../../redux/parametersRedux';
import { getEverything } from '../../../redux/everythingRedux';

const mapStateToProps = (state) => ({
  everything: getEverything(state),
});

const mapDispatchToProps = dispatch => ({
  removeAllPosters: () => dispatch(removeAllPosters()),
  addPoster: order => dispatch(addPoster(order)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
