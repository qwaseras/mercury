const APIConfig = {};

if (process.env.REACT_APP_ENV === 'local') {
  APIConfig.apiUrl = 'http://localhost:3030';
  APIConfig.tinymceKey = 'bfeaqi4foy765orxc0yhpyxizt0nth7n2qrvhr26o1s3pb82';
} else {
  APIConfig.tinymceKey = 'bfeaqi4foy765orxc0yhpyxizt0nth7n2qrvhr26o1s3pb82';
  APIConfig.apiUrl = 'https://mercury-api.com';
}

export default APIConfig;
