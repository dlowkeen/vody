import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import MovieReducer from './MovieReducer';

export default combineReducers({
  auth: AuthReducer,
  search: formReducer,
  movie: MovieReducer
})