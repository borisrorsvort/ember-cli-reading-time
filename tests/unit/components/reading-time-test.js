/*global $*/
import { test, moduleForComponent } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('reading-time', 'readingTimeComponent', {

});

test("it exist", function(){
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component.state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component.state, 'inDOM');
});


test("displaying etr", function(){
  expect(1);

  var component = this.subject(),
      that = this;

  component.set('textTarget', '.wrapper');

  Ember.run(function(){
    that.$().wrap("<div class='wrapper'></div>").after('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    component.send('displayETR');
  });

  ok($('.eta').text().length > 0);
});
