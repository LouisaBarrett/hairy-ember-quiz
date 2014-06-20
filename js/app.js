App = Ember.Application.create({});

App.ApplicationController = Ember.Controller.extend({
  title: "Hairy Quiz, Ember Addition"
});

App.Router.map(function() {
  this.resource("warmup");
  this.resource("quiz");
});

App.QuizController = Ember.ArrayController.extend({
  'score': function() {
    var total = 0;
    this.get('questions').forEach(function(question) {
      total += question.value;
    });
    return total;
  }.property('@each.value'),
  quizTitle: "The Actual Quiz",
  questions: [{
    id: 1,
    question: "Fish talk a lot",
    value: 0,
    answerOptions: [{
      display: "True",
      value: 0
    }, {
      display: "False",
      value: 1
    }]
  }, {
    id: 2,
    question: "Cats are not dogs",
    value: 0,
    answerOptions: [{
      display: "True",
      value: 1
    }, {
      display: "False",
      value: 0
    }]
  }, {
    id: 3,
    question: "Birds are mammals",
    value: 0,
    answerOptions: [{
      display: "True",
      value: 1
    }, {
      display: "False",
      value: 0
    }]
  }, {
    id: 4,
    question: "Unicorns are real",
    value: 0,
    answerOptions: [{
      display: "True",
      value: 1
    }, {
      display: "False",
      value: 0
    }]
  }, {
    id: 5,
    question: "Dinosaurs are awesome",
    value: 1,
    answerOptions: [{
      display: "True",
      value: 1
    }, {
      display: "False",
      value: 0
    }]
  }]
});

// App.QuizQuestionsController = Ember.ArrayController.extend({
//   itemController: 'questions'
// });

// App.QuizQuestionsController = Ember.ObjectController.extend({
//   lookupItemController: function( object ) {
//   if (object.get('value')) {
//       alert('value');
//     } else {
//       alert('things');
//     }
//   }
// });

App.QuizRoute = Ember.Route.extend({
  // model: function() {
  //   return quiz;
  // }
  // setupController: function(controller, quiz) {
  //   controller.set('model', quiz.get('questions'));
  // }
});

// App.QuizController = Ember.Controller.extend({
// });

// App.WarmupRoute = Ember.Route.extend({
//   model: function() {
//     return warmup;
//   }
// });


App.WarmupController = Ember.View.extend({
  warmupTitle: "Warm Up Question",
  warmupQuestions: [{
    id: 0,
    question: "Warm up questions are fun!",
    warmupOptions: [{
      display: "True",
      value: 0
    }, {
      display: "False",
      value: 1
    }]
  }],
});


App.ClickWarmUpStatus = Ember.View.extend({
  click: function(evt) {
    // $(".js-total").html($(".js-answer").val());
    this.resource('warmup')
  }
});

App.ClickQuizScore = Ember.View.extend({
  click: function(evt) {


    var $id, $answer, question, answerTotals;

    // console.log($(".question").length);
    // $(".question").each(function(i, el) {
    //   // console.log(i, el);
    //   // console.log("bananas!");

    //   $id = $(el).attr("answerOptions");
    //   $answer = $(el).val();
    //   question = $(el).attr("quizQuestions");
    //   if ($answer == 0) {
    //     $(el).css("background-color", "red");
    //   } else {
    //     $(el).css("background-color", "lightgreen");
    //   }

    //   console.log($answer, "pants");
    //   answerTotals = Number($answer);
    //   $(".js-total2").html(answerTotals);
    // });
  }

});
