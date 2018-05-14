const APIConfig = {};

if (process.env.REACT_APP_ENV === 'local') {
  APIConfig.apiUrl = 'http://localhost:3030';
} else {
  APIConfig.apiUrl = 'https://mercury-api.com';
}

export default APIConfig;
