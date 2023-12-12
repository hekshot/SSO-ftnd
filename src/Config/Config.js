// Set the desired environment ('dev' or 'prod')
const environment = 'dev';

const config = {
  dev: {
    apiBaseUrl: 'http://localhost:8081',
  },
  prod: {
    apiBaseUrl: '/api',
  },
};

export default config[environment];
