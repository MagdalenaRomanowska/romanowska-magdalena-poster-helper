import { connect } from 'react-redux';
import ListOfPosters from './ListOfPosters';
import { getAllPostersByProjectName, removePoster, movePosterDown, movePosterUp } from '../../../redux/postersRedux';
import { getChosenPosterId, setChosenPosterID } from '../../../redux/chosenPosterIDRedux';
import { getSelectedProjectName } from '../../../redux/selectedProjectNameRedux';

const mapStateToProps = (state) => ({
  posters: getAllPostersByProjectName(state, state.selectedProjectName),  
  chosenPosterId: getChosenPosterId(state),    
  selectedProjectName: getSelectedProjectName(state),
});

const mapDispatchToProps = dispatch => ({  
  setChosenPosterID: (value, projectName) => dispatch(setChosenPosterID(value, projectName)),  
  removePoster: (posterId) => dispatch(removePoster(posterId)),
  movePosterDown: (posterIndex) => dispatch(movePosterDown(posterIndex)),
  movePosterUp: (posterIndex) => dispatch(movePosterUp(posterIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPosters);