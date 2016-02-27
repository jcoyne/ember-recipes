/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
         'connect-src' : "'self' https://calm-brook-9092.herokuapp.com"
    },
    modulePrefix: 'recipe-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      API_HOST: 'http://localhost:3000',
      SERVER_TOKEN_ENDPOINT: 'http://localhost:3000/users/sign_in'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy['connect-src'] = "'self' http://localhost:3000";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://calm-brook-9092.herokuapp.com';
    ENV.APP.SERVER_TOKEN_ENDPOINT = 'https://calm-brook-9092.herokuapp.com/users/sign_in';
  }

  ENV['ember-simple-auth'] =  {
      authenticationRoute: 'recipes'
  }


  return ENV;
};
