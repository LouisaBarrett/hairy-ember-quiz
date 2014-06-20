App = Ember.Application.create({});

App.ApplicationController = Ember.Controller.extend({
  title: "Hairy Quiz, Ember Addition"
});

App.Router.map(function() {
  this.resource("warmup");
  this.resource("quiz");
});

App.WarmupController = Ember.View.extend({
  'warmupTitle': "Warm Up Question",
  'warmupQuestions': [{
      question: 'Warm up questions are fun!',
      warmupOptions: [{
        display: 'True',
        value: 0
      }, {
        display: 'False',
        value: 1
      }]
    }],
});

App.QuizController = Ember.Controller.extend({
  'quizTitle': 'The Actual Quiz',
  'quizQuestions': [{
      question: 'Fish talk a lot',
      answerOptions: [{
        display: 'True',
        value: 0
      }, {
        display: 'False',
        value: 1
      }]
    }, {
      question: 'Cats are not dogs',
      answerOptions: [{
        display: 'True',
        value: 1
      }, {
        display: 'False',
        value: 0
      }]
    }, {
      question: 'Birds are mammals',
      answerOptions: [{
        display: 'True',
        value: 1
      }, {
        display: 'False',
        value: 0
      }]
    }, {
      question: 'Unicorns are real',
      answerOptions: [{
        display: 'True',
        value: 1
      }, {
        display: 'False',
        value: 0
      }]
    }, {
      question: 'Dinosaurs are awesome',
      answerOptions: [{
        display: 'True',
        value: 1
      }, {
        display: 'False',
        value: 0
      }]
  }],
});

App.ClickWarmUpStatus = Ember.View.extend({
  click: function(evt) {
    $(".js-total").html($(".js-answer").val());
  }
});

App.ClickQuizScore = Ember.View.extend({
  click: function(evt) {
    // var answer1 = $(".js-answer1").val();
    // if (answer1 == 0) {
    //   $(".js-answer1").css("background-color", "red");
    // } else {
    //   $(".js-answer1").css("background-color", "lightgreen");
    // }

    // var answer2 = $(".js-answer2").val();
    // if (answer2 == 0) {
    //   $(".js-answer2").css("background-color", "red");
    // } else {
    //   $(".js-answer2").css("background-color", "lightgreen");
    // }

    // var answer3 = $(".js-answer3").val();
    // if (answer3 == 0) {
    //   $(".js-answer3").css("background-color", "red");
    // } else {
    //   $(".js-answer3").css("background-color", "lightgreen");
    // }
    console.log($('.question').length)
    $('.question').each(function(i, el) {
      console.log(i, el)
      var $id, $answer, question, answerTotals;

      $id = $(el).attr('answerOptions');
      $answer = $(el).val();
      question = questions[id];

      if ($answer == 0) {
        $(el).css("background-color", "red");
      } else {
        $(el).css("background-color", "lightgreen");
      }

      answerTotals = Number(answer1) + Number(answer2) + Number(answer3);
      $(".js-total2").html(answerTotals);
    });

  }

});
