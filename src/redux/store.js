import { combineReducers, createStore } from 'redux';
import { createMigrate, persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import storage from 'redux-persist/es/storage'; // defaults to localStorage for web
import storeJSON from '../data/store.json';
import globalReducer from './globalRedux';
import parameterReducer from './parametersRedux';
import chosenPosterIDReducer from './chosenPosterIDRedux';
import pictureReducer from './picturesRedux';
import backgroundWallsReducer from './backgroundWallsRedux';
import selectedBackgroundWallNameReducer from './selectedBackgroundWallNameRedux';
import posterDimensionsReducer from './posterDimensionsRedux';
import scaleReducer from './scaleRedux';
import everythingReducer from './everythingRedux';

// define initial state and shallow-merge initial data
const initialState = storeJSON;

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
};

// define reducers
const reducers = {
  posters: parameterReducer,
  chosenPoster: chosenPosterIDReducer,
  pictures: pictureReducer,
  backgroundWalls: backgroundWallsReducer,
  selectedBackgroundWallName: selectedBackgroundWallNameReducer,
  posterDimensions: posterDimensionsReducer,
  globalScale: scaleReducer,
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

const persistedReducer = persistReducer(persistConfig, combinedReducers);

// merge all reducers with globalReducer
const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

// create store
const store = createStore(
  storeReducer,
  // persistedReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store); //'dupa/';//createStore(persistedReducer);

export { store, persistor };
