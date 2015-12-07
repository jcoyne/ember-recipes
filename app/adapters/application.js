import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'https://calm-brook-9092.herokuapp.com',

  shouldReloadAll: function() { return false }
});
