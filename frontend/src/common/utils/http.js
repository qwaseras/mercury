import axios from 'axios';
import APIConfig from './APIConfig';
import {getIdToken} from './auth';

function request(url, data, method) {
  return axios({
    method,
    url: APIConfig.apiUrl + url,
    data,
    headers: {'Authorization': 'Bearer ' + getIdToken()},
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
