import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import MovieReducer from './MovieReducer';
import HomeReducer from './HomeReducer';

export default combineReducers({
  auth: AuthReducer,
  search: formReducer,
  movie: MovieReducer,
  home: HomeReducer
})