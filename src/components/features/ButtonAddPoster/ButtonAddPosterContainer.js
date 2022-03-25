import {connect} from 'react-redux';
import ButtonAddPoster from './ButtonAddPoster';
import {getAllPosters, addPoster } from '../../../redux/parametersRedux';

const mapStateToProps = (state) => ({
  posters: getAllPosters(state),
});

const mapDispatchToProps = dispatch => ({
  addPoster: order => dispatch(addPoster(order)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddPoster);
