// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
const URL = {
  APPLICATION_PROTOCOL: 'http://',
  APPLICATION_SERVER_DOMAIN_NAME: '149.129.178.50',
  APPLICATION_SERVER_PORT: ':8081',
  APPLICATION_NAME: '/ogitaks',
};
export const environment = {
  production: false,
  API_BASE_URL: URL.APPLICATION_PROTOCOL + URL.APPLICATION_SERVER_DOMAIN_NAME +
    URL.APPLICATION_SERVER_PORT + URL.APPLICATION_NAME,
};