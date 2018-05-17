import jwtDecode from 'jwt-decode';
import http from './http';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

export async function login(username, password) {
  const response = await http.post('/authenticate/', {
    email: username,
    password: password,
  });
  localStorage.setItem(ID_TOKEN_KEY, response.data.auth_token);
}

export async function signup(email, nickname, password, passwordConfirmation) {
  await http.post('/users', {
    email: email,
    nickname: nickname,
    password: password,
    password_confirmation: passwordConfirmation,
  });
}


export function getUserEmail() {
  const jwt = jwtDecode(getIdToken());
  return jwt.email;
}


export function logout() {
  clearIdToken();
  clearAccessToken();
}


export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  if (match === null) {
    // safari redirect html escapes # fragment
    match = RegExp('%23' + name + '=([^&]*)').exec(window.location.hash);
  }
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
  const accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
  const idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = jwtDecode(encodedToken);
  if (!token.exp) {
    return null;
  }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
