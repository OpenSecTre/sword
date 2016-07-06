import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import scan from './scan';

export default combineReducers({
  router,
  scan
});
