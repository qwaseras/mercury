import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';

import {reducer as home} from './pages/Home/reducer';
import {reducer as dashboard} from './pages/Dashboard/reducer';


export default combineReducers({
    home,
    dashboard,
    routing: routerReducer,
});
