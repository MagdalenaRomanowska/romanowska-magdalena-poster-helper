import { connect } from 'react-redux';
import ListOfPosters from './ListOfPosters';
import { getPosterParameters, getAllParameters, movePosterByDeltaX, movePosterByDeltaY } from '../../../redux/parametersRedux';
import { getChosenPosterId, setChosenPosterID } from '../../../redux/chosenPosterIDRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
  posterParameters: getPosterParameters(state, state.chosenPosterID.value),
  // posterParameters: console.log('state:', state),
  chosenPosterId: getChosenPosterId(state),
});

const mapDispatchToProps = dispatch => ({
  setChosenPosterID: (value) => dispatch(setChosenPosterID(value)),
  movePosterByDeltaX: (id, deltaX) => dispatch(movePosterByDeltaX(id, deltaX)),
  movePosterByDeltaY: (id, deltaY) => dispatch(movePosterByDeltaY(id, deltaY)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPosters);