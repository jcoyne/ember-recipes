import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import ENV from '../config/environment';

export default DeviseAuthenticator.extend({
    serverTokenEndpoint: ENV.APP.SERVER_TOKEN_ENDPOINT
});
