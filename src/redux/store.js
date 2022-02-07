import { combineReducers, createStore } from 'redux';
import parameterList from '../data/parameters.json';
import globalReducer from './globalRedux';
import parameterReducer from './parametersRedux';
import chosenSpirographIDReducer from './chosenSpirographIDRedux';


// define initial state and shallow-merge initial data
const initialState = {
  parameters: parameterList,
  chosenSpirographID: undefined,
};

// define reducers
const reducers = {
  parameters: parameterReducer,
  chosenSpirographID: chosenSpirographIDReducer,
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
