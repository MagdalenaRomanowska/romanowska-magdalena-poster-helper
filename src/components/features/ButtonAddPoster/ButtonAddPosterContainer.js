import {connect} from 'react-redux';
import ButtonAddPoster from './ButtonAddPoster';
import {getAllParameters, addPoster } from '../../../redux/parametersRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
});

const mapDispatchToProps = dispatch => ({
  addPoster: order => dispatch(addPoster(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddPoster);
