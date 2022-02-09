import {connect} from 'react-redux';
import BackgroundWall from './BackgroundWall';
import {getAllParameters, setXW1, setYW1, setR, setW1Teeth, setW2Teeth, setPenPosition, 
  setShowOuterWheel, setShowInnerWheel, setShowPen, setColor, setGamma } from '../../../redux/parametersRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
});

const mapDispatchToProps = dispatch => ({
  setXW1: (spirographId, xW1) => dispatch(setXW1(spirographId, xW1)),
  setYW1: (spirographId, yW1) => dispatch(setYW1(spirographId, yW1)),
  setR: (spirographId, r) => dispatch(setR(spirographId, r)),
  setW1Teeth: (spirographId, w1Teeth) => dispatch(setW1Teeth(spirographId, w1Teeth)),
  setW2Teeth: (spirographId, w2Teeth) => dispatch(setW2Teeth(spirographId, w2Teeth)),
  setPenPosition: (spirographId, penPosition) => dispatch(setPenPosition(spirographId, penPosition)),
  setShowOuterWheel: (spirographId, showOuterWheel) => dispatch(setShowOuterWheel(spirographId, showOuterWheel)),
  setShowInnerWheel: (spirographId, showInnerWheel) => dispatch(setShowInnerWheel(spirographId, showInnerWheel)),
  setShowPen: (spirographId, showPen) => dispatch(setShowPen(spirographId, showPen)),
  setColor: (spirographId, color) => dispatch(setColor(spirographId, color)),
  setGamma: (spirographId, gamma) => dispatch(setGamma(spirographId, gamma)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundWall);
