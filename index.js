module.exports = {
  name: 'ember-cli-reading-time',
  included: function(app) {
    this._super.included(app);
    app.import('bower_components/reading-time/build/readingTime.min.js');
  }
};
