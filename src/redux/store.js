import { combineReducers, createStore } from 'redux';
import parametersList from '../data/store.json';
import globalReducer from './globalRedux';
import parameterReducer from './parametersRedux';
import chosenPosterIDReducer from './chosenPosterIDRedux';


// define initial state and shallow-merge initial data
const initialState = {
  parameters: parametersList,
  chosenPosterID: { value: 0, startPosterPositionX: 0, startPosterPositionY: 0, startClickPositionX: 0, startClickPositionY: 0 },
};

// define reducers
const reducers = {
  parameters: parameterReducer,
  chosenPosterID: chosenPosterIDReducer,
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
