import { connect } from 'react-redux';
import DropZone from './DropZone';
// import { getChosenCompositionId } from '../../../redux/chosenCompositionIdRedux';

const mapStateToProps = (state) => ({
  // compositionId: getChosenCompositionId(state),
});

export default connect(mapStateToProps)(DropZone);
