import {connect} from 'react-redux';
import Parameters from './Parameters';
import {getAllParameters, setXPosition, setYPosition, setPosterWidth, setPosterHeight } from '../../../redux/parametersRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
});

const mapDispatchToProps = dispatch => ({
  setXPosition: (posterId, xPosition) => dispatch(setXPosition(posterId, xPosition)),
  setYPosition: (posterId, yPosition) => dispatch(setYPosition(posterId, yPosition)),
  setPosterWidth: (posterId, posterWidth) => dispatch(setPosterWidth(posterId, posterWidth)),
  setPosterHeight: (posterId, posterHeight) => dispatch(setPosterHeight(posterId, posterHeight)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Parameters);
