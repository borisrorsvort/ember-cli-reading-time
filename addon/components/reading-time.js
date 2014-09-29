/*global $*/
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['eta'],
  didInsertElement: function () {
    var that = this;
    Ember.run.scheduleOnce('afterRender', function () {
      that.send('displayETR');
    });
  },
  actions: {
    displayETR: function () {
      var textTarget = this.get('textTarget');
      $(textTarget).readingTime();
    }
  }
});
