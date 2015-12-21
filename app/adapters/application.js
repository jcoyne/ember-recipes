import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	//host: 'https://calm-brook-9092.herokuapp.com',
  host: 'http://localhost:3000',

  shouldReloadAll: function() { return false; }
});
