import { combineReducers } from 'redux';
import resultsReducer from './results';
import nomineesReducer from './nominees';

const appReducer = combineReducers({
  results: resultsReducer,
  nominees: nomineesReducer
});

export default appReducer;
