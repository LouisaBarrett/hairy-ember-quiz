
App = Ember.Application.create({});

App.ApplicationController = Ember.Controller.extend({
  title: "Hairy Quiz, Ember Addition",
  description: "A very difficult and important quiz about Beasts"
});

App.Router.map(function() {
  this.resource("quiz");
});

App.QuizRoute = Ember.Route.extend({
  model: function() {
    return questions;
  }
});


App.QuizController = Ember.ArrayController.extend({
  'getScore': false,

  actions: {

    totalScore: function() {
      var total; 
      total = 0;
      this.get('model').forEach(function(question) { 
        if (question.selectedAnswer == question.correctAnswer) {
          question.set('isCorrect', true);
          total += 10;
        }
      });
      this.set('getScore', true);
      this.set('totalScore', total);
    }
      
  }
});

App.QuizAnswerSelect = Ember.Select.extend({
  classNameBindings: ['context.isCorrect:correct']
})


var questions = [Ember.Object.create({
  'id': 1,
  'question': "Fish have a lot of hair",
  'correctAnswer': 'False',
  'answerOptions': ["True", "False"]
}), 
Ember.Object.create({
  'id': 2,
  'question': "Cats are not dogs",
  'correctAnswer': 'True',
  'answerOptions': ["True", "False"]
})]; 
