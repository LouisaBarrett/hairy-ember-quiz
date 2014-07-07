
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
  // computed property to @each.isCorrect
  //  -> compute the number of correct answers and set score
  totalScore: function() {
    debugger
    return this.get("model").filterBy("isCorrect", true).length * 10
  }.property("@each.isCorrect")
});

App.QuestionController = Ember.ObjectController.extend({
  // observer to selectedAnswer
  //  -> set is correct on question if selectedAnswer == correctAnswer
  onSelectedAnswerChange: function() {
    debugger
    this.set("isCorrect", this.get("selectedAnswer") == this.get("correctAnswer"))
  }.observes("selectedAnswer")
});

var questions = [Ember.Object.create({
  "id": 1,
  "question": "Fish have a lot of hair",
  "correctAnswer": "False",
  "answerOptions": ["Unsure" ,"True", "False"]
}), 
Ember.Object.create({
  "id": 2,
  "question": "Cats are not dogs",
  "correctAnswer": "True",
  "answerOptions": ["Unsure", "True", "False"]
}),
Ember.Object.create({
  "id": 3,
  "question": "Dinosaurs are not interesting",
  "correctAnswer": "False",
  "answerOptions": ["Unsure" ,"True", "False"]
})]; 
