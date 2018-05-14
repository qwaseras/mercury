import axios from 'axios';
import {getAccessToken} from './auth'

function request(url, data, method) {
  return axios({
    method,
    url: 'http://localhost:3001/' + url,
    data,
    headers: {'Authorization': 'Bearer ' + getAccessToken() }
  });
}

function get(url) {
  return request(url, null, 'GET');
}

function post(url, data) {
  return request(url, data, 'POST');
}

function patch(url, data) {
  return request(url, data, 'PATCH');
}

function del(url) {
  return request(url, null, 'DELETE');
}

function put(url, data) {
  return request(url, data, 'PUT');
}


export default {
  get,
  post,
  patch,
  del,
  put,
};
