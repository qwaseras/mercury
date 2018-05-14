const APIConfig = {};

if (process.env.REACT_APP_ENV === 'local') {
  APIConfig.apiUrl = 'https://avenue-api-dev.7parkdata.com';
  APIConfig.callback = 'http://localhost:3000/callback-dev.html';
  APIConfig.logout = 'http://localhost:3000';
  APIConfig.clientID = 'vBsiy6uQ56FMp2uybp0CuvziUSQ7Mpc1';
  APIConfig.clientDomain = 'qwaseras.auth0.com'
} else {
  APIConfig.apiUrl = 'https://avenue-api.7parkdata.com';
  APIConfig.callback = 'https://akmdashboard.7parkdata.com/callback.html';
  APIConfig.clientID = 'vBsiy6uQ56FMp2uybp0CuvziUSQ7Mpc1';
  APIConfig.clientDomain = 'qwaseras.auth0.com';
}

export default APIConfig;
