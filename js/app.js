
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

// App.QuizIndexController = Ember.ArrayController.extend({
//   'quizTitle': 'Beast Quiz'
// });

App.QuizController = Ember.ArrayController.extend({
  'getScore': false,

  actions: {

    totalScore: function() {
      var total; 
      total = 0;
      this.get('model').forEach(function(question) { 
        if (question.selectedAnswer == question.correctAnswer) {
          total += 10;
        }
      });
      this.set('getScore', true);
      this.set('totalScore', total);
    }
      
  }
});

// App.ClickQuizScore = Ember.View.extend({
//   actions: {
//     'totalScore': function() {
//       alert('Score!')
//         var total; 
//         total = 0;
//         this.get('questions').forEach(function(question) { 
//           if (question.answerOptions.display == correctAnswer) {
//             total += 10;
//           }
//           console.log(total);
//         });
//         return total;
//       }.property('@each'),
//     }
// });


var questions = [{
  'id': 1,
  'question': "Fish have a lot of hair",
  'correctAnswer': 'False',
  'answerOptions': ["True", "False"]
}, {
  'id': 2,
  'question': "Cats are not dogs",
  'correctAnswer': 'True',
  'answerOptions': ["True", "False"]
}]; 
