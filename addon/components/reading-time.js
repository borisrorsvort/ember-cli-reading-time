import Em from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['eta'],
  didInsertElement: function () {
    var textTarget = this.get('textTarget');
    Ember.run.scheduleOnce('afterRender', function () {
      $(textTarget).readingTime();
    })
  }
});
