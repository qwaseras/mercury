import axios from 'axios';
import APIConfig from './APIConfig';
import {getIdToken} from './auth';

function request(url, params, data, method) {
  return axios({
    method,
    url: APIConfig.apiUrl + url,
    data,
    params,
    headers: {'Authorization': 'Bearer ' + getIdToken()},
  });
}

function get(url, params) {
  return request(url, params, null, 'GET');
}

function post(url, data) {
  return request(url, null, data, 'POST');
}

function patch(url, data) {
  return request(url, null, data, 'PATCH');
}

function del(url) {
  return request(url, null, null, 'DELETE');
}

function put(url, data) {
  return request(url, null, data, 'PUT');
}


export default {
  get,
  post,
  patch,
  del,
  put,
};
