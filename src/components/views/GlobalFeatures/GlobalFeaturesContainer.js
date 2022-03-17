import { connect } from 'react-redux';
import GlobalFeatures from './GlobalFeatures';
import { getGlobalScale, setGlobalScale } from '../../../redux/scaleRedux';

const mapStateToProps = (state) => ({  
  globalScale: getGlobalScale(state),
});

const mapDispatchToProps = dispatch => ({
  setGlobalScale: (value) => dispatch(setGlobalScale(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFeatures);