import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';

import {reducer as home} from './pages/Home/reducer';
import {reducer as userProfile} from './pages/UserProfile/reducer';
import {reducer as blog} from './pages/Blog/reducer';
import {reducer as blogPage} from './pages/AddBlogPage/reducer';


export default combineReducers({
  home,
  userProfile,
  blog,
  blogPage,
  routing: routerReducer,
});
