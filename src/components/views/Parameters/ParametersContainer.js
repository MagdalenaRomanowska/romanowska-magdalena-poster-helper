import {connect} from 'react-redux';
import Parameters from './Parameters';
import {getAllParameters, setXPosterPosition, setYPosterPosition, setPosterWidth, setPosterHeight, setPictureName } from '../../../redux/parametersRedux';
import { getAllPictures } from '../../../redux/picturesRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
  pictures: getAllPictures(state),
});

const mapDispatchToProps = dispatch => ({
  setXPosterPosition: (posterId, xPosterPosition) => dispatch(setXPosterPosition(posterId, xPosterPosition)),
  setYPosterPosition: (posterId, yPosterPosition) => dispatch(setYPosterPosition(posterId, yPosterPosition)),
  setPosterWidth: (posterId, posterWidth) => dispatch(setPosterWidth(posterId, posterWidth)),
  setPosterHeight: (posterId, posterHeight) => dispatch(setPosterHeight(posterId, posterHeight)),
  setPictureName: (posterId, pictureName) => dispatch(setPictureName(posterId, pictureName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Parameters);
