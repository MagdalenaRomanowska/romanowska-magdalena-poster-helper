import {connect} from 'react-redux';
import ButtonAddPoster from './ButtonAddPoster';
import {getAllParameters, addSpirograph } from '../../../redux/parametersRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
});

const mapDispatchToProps = dispatch => ({
  addSpirograph: order => dispatch(addSpirograph(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddPoster);
