import {connect} from 'react-redux';
import Poster from './Poster';
import { getPosterParameters, getAllParameters, setXPosition, setYPosition, setPosterWidth, setPosterHeight } from '../../../redux/parametersRedux';

const mapStateToProps = (state, props) => ({
  parameters: getAllParameters(state),
  posterParameters: getPosterParameters(state, props.id),
});


const mapDispatchToProps = dispatch => ({
  setXPosition: (posterId, xPosition) => dispatch(setXPosition(posterId, xPosition)),
  setYPosition: (posterId, yPosition) => dispatch(setYPosition(posterId, yPosition)),
  setPosterWidth: (posterId, posterWidth) => dispatch(setPosterWidth(posterId, posterWidth)),
  setPosterHeight: (posterId, posterHeight) => dispatch(setPosterHeight(posterId, posterHeight)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Poster);
