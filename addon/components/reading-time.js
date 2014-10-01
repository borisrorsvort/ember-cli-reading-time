/*global $*/
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  displayWordCount: true,
  wordCountTarget: '.word-count',
  remotePath: null,
  remoteTarget: null,
  round: true,
  lang: "en",
  lessThanAMinuteString: null,
  prependTimeString: null,
  prependWordString: null,
  wordString: 'words',
  textTarget: 'article',

  didInsertElement: function () {
    var that = this;
    Ember.run.scheduleOnce('afterRender', function () {
      that.send('displayETR');
    });
  },

  actions: {
    displayETR: function () {
      var that = this,
          textTarget = this.get('textTarget'),
          params = {},
          options = [
            'wordCountTarget',
            'remotePath',
            'remoteTarget',
            'round',
            'lang',
            'lessThanAMinuteString',
            'prependTimeString',
            'prependWordString',
            'textTarget',
            'wordString'
          ];

      Ember.run.scheduleOnce('afterRender', function () {
        options.forEach(function (option) {
          var optionValue = that.get(option);
          if (optionValue !== null) {
            params[option] = optionValue;
          }
        });
        $(textTarget).readingTime(params);
      });
    }
  }
});
