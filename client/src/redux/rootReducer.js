import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import scan from 'redux/modules/scanner';

export default combineReducers({
  router,
  scan
});
