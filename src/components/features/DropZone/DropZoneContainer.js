import { connect } from 'react-redux';
import DropZone from './DropZone';
import { setPosters } from '../../../redux/postersRedux';
import { setPictures } from '../../../redux/picturesRedux';
import { setBackgroundWalls } from '../../../redux/backgroundWallsRedux';
import { setGlobalScales } from '../../../redux/scaleRedux';
import { setProjectNames } from '../../../redux/projectNamesRedux';
import { setPosterDimensions } from '../../../redux/posterDimensionsRedux';
import { setSelectedBackgroundWallNames } from '../../../redux/selectedBackgroundWallNameRedux';
import { setDefaultSelectedProjectName } from '../../../redux/selectedProjectNameRedux';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = dispatch => ({
  setPosters: (value) => dispatch(setPosters(value)),
  setPictures: (value) => dispatch(setPictures(value)),
  setBackgroundWalls: (value) => dispatch(setBackgroundWalls(value)),
  setGlobalScales: (value) => dispatch(setGlobalScales(value)),
  setProjectNames: (value) => dispatch(setProjectNames(value)),
  setPosterDimensions: (value) => dispatch(setPosterDimensions(value)),
  setSelectedBackgroundWallNames: (value) => dispatch(setSelectedBackgroundWallNames(value)),
  setDefaultSelectedProjectName: (value) => dispatch(setDefaultSelectedProjectName(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);
