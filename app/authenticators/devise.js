import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
    //serverTokenEndpoint: 'https://calm-brook-9092.herokuapp.com/users/sign_in'
    serverTokenEndpoint: 'http://localhost:3000/users/sign_in'
});
