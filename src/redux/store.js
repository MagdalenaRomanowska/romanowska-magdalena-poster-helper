import { combineReducers, createStore } from 'redux';
import storeJSON from '../data/store.json';
import globalReducer from './globalRedux';
import posterReducer from './postersRedux';
import chosenPosterIDReducer from './chosenPosterIDRedux';
import pictureReducer from './picturesRedux';
import backgroundWallsReducer from './backgroundWallsRedux';
import selectedBackgroundWallNameReducer from './selectedBackgroundWallNameRedux';
import posterDimensionsReducer from './posterDimensionsRedux';
import scaleReducer from './scaleRedux';
import everythingReducer from './everythingRedux';
import projectNamesReducer from './projectNamesRedux';
import selectedProjectNameReducer from './selectedProjectNameRedux';

// define initial state and shallow-merge initial data
const initialState = storeJSON;

// define reducers
const reducers = {
  posters: posterReducer,
  chosenPoster: chosenPosterIDReducer,
  pictures: pictureReducer,
  backgroundWalls: backgroundWallsReducer,
  selectedBackgroundWallNames: selectedBackgroundWallNameReducer,
  projectNames: projectNamesReducer,
  selectedProjectName: selectedProjectNameReducer,
  posterDimensions: posterDimensionsReducer,
  globalScales: scaleReducer,
  everything: everythingReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});  

// combine reducers
const combinedReducers = combineReducers(reducers);

// merge all reducers with globalReducer
const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
