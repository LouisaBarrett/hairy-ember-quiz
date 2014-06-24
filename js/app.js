
App = Ember.Application.create({});

App.Router.map(function() {
  this.resource("quiz");
  this.resource('score');
});

App.ApplicationController = Ember.Controller.extend({
  title: "Hairy Quiz, Ember Addition",
  description: "A very difficult and important quiz about Beasts"
});

App.QuizRoute = Ember.Route.extend({
  model: function() {
    return questions;
  }
});

App.ScoreController = Ember.Controller.extend({
  actions: {
    'getScore': function() {
      // this.set('GetScore', true);
      alert('Score!')
    }
  }
});

var questions = [{
  'id': '1',
  'question': "Fish have a lot of hair",
  'value': 0,
  'answerOptions': [{
    'display': "True",
    'value': 0
  }, {
    'display': "False",
    'value': 1
  }]
}, {
  'id': '2',
  'question': "Cats are not dogs",
  'value': 0,
  'answerOptions': [{
    'display': "True",
    'value': 1
  }, {
    'display': "False",
    'value': 0
  }]
}]; 
