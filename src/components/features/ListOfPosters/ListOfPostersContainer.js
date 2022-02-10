import { connect } from 'react-redux';
import ListOfPosters from './ListOfPosters';
import { getAllParameters } from '../../../redux/parametersRedux';
import { getChosenPosterId, setChosenPosterID } from '../../../redux/chosenPosterIDRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
  chosenPosterId: getChosenPosterId(state),
});

const mapDispatchToProps = dispatch => ({
  setChosenPosterID: (value) => dispatch(setChosenPosterID(value)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPosters);