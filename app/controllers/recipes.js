import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    random() {
      var length = this.get('model').get('length');
      var random = Math.ceil(Math.random() * length);
      this.transitionToRoute('recipes.show', random);
      return false;
    }
  }
});


