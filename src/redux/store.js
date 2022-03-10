import { combineReducers, createStore } from 'redux';
import storeJSON from '../data/store.json';
import globalReducer from './globalRedux';
import parameterReducer from './parametersRedux';
import chosenPosterIDReducer from './chosenPosterIDRedux';
import pictureReducer from './picturesRedux';

// define initial state and shallow-merge initial data
const initialState = storeJSON;

// define reducers
const reducers = {
  posters: parameterReducer,
  chosenPoster: chosenPosterIDReducer,
  pictures: pictureReducer,
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

export default store;
