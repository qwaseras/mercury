import {
  LOAD_USER,
} from './constants';

import http from '../../common/utils/http';

export function loadUser(nickname) {
  return async (dispatch) => {
    const response = await http.get('/users?nickname=' + nickname);
    dispatch({type: LOAD_USER, data: {user: response.data}});
  };
}
