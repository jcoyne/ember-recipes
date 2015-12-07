import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  thumbnail: DS.attr('string'),
  ingredients: DS.attr(),
});
