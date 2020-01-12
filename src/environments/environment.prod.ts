const URL = {
  APPLICATION_PROTOCOL: 'http://',
  APPLICATION_SERVER_DOMAIN_NAME: 'localhost',
  APPLICATION_SERVER_PORT: ':8080',
  APPLICATION_NAME: '/ogitaks',
};
export const environment = {
  production: true,
  API_BASE_URL: URL.APPLICATION_PROTOCOL + URL.APPLICATION_SERVER_DOMAIN_NAME +
    URL.APPLICATION_SERVER_PORT + URL.APPLICATION_NAME,
};