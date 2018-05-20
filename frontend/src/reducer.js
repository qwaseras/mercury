import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';

import {reducer as home} from './pages/Home/reducer';
import {reducer as userProfile} from './pages/UserProfile/reducer';
import {reducer as blog} from './pages/Blog/reducer';


export default combineReducers({
  home,
  userProfile,
  blog,
  routing: routerReducer,
});
