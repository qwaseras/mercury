import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';

import {reducer as home} from './pages/Home/reducer';
import {reducer as userProfile} from './pages/UserProfile/reducer';


export default combineReducers({
  home,
  userProfile,
  routing: routerReducer,
});
