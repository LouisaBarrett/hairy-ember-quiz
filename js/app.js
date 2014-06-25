
App = Ember.Application.create({});

App.Router.map(function() {
  this.resource("quiz");
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

App.QuizController = Ember.ArrayController.extend({
  actions: {
    'getScore': function() {
      alert('Score!')
        var total; 
        total = 0;
        this.get('questions').forEach(function(question) { 
          if (question.answerOptions.selected == correctAnswer) {
            total += 10;
          }
        });
        return total;
      }.property('@each'),
    }
});

var questions = [{
  'id': 1,
  'question': "Fish have a lot of hair",
  'correctAnswer': 'False',
  'answerOptions': [{
    'display': "True",
    'value': 0
  }, {
    'display': "False",
    'value': 1
  }]
}, {
  'id': 2,
  'question': "Cats are not dogs",
  'correctAnswer': 'True',
  'answerOptions': [{
    'display': "True",
    'value': 1
  }, {
    'display': "False",
    'value': 0
  }]
}]; 
