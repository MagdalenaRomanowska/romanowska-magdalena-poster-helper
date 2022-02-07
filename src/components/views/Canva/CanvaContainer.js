import {connect} from 'react-redux';
import Canva from './Canva';
import {getAllParameters } from '../../../redux/parametersRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
});

export default connect(mapStateToProps)(Canva);
