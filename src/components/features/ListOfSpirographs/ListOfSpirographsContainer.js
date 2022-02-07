import { connect } from 'react-redux';
import ListOfSpirographs from './ListOfSpirographs';
import { getAllParameters } from '../../../redux/parametersRedux';
import { getChosenSpirographId, setChosenSpirographID } from '../../../redux/chosenSpirographIDRedux';

const mapStateToProps = (state) => ({
  parameters: getAllParameters(state),
  chosenSpirographId: getChosenSpirographId(state),
});

const mapDispatchToProps = dispatch => ({
  setChosenSpirographID: (value) => dispatch(setChosenSpirographID(value)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfSpirographs);