import { connect } from 'react-redux';
import ProjectToChoose from './ProjectToChoose';
import { getAllProjectNames } from '../../../redux/projectNamesRedux';
import { setSelectedProjectName, getSelectedProjectName } from '../../../redux/selectedProjectNameRedux';

const mapStateToProps = (state) => ({
  projectNames: getAllProjectNames(state),
  selectedProjectName: getSelectedProjectName(state),
});

const mapDispatchToProps = dispatch => ({  
  setSelectedProjectName: (projectName) => dispatch(setSelectedProjectName(projectName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectToChoose);