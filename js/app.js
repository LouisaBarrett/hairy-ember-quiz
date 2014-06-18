App = Ember.Application.create();

App.Router.map(function(){
  this.resource('warmup');
  this.resource('quiz');
});

App.ClickWarmUpStatus = Ember.View.extend({
  click: function(evt) {
    $('.js-total').html($('.js-answer').val());
  }
});

App.ClickQuizScore = Ember.View.extend({
  click: function(evt) {
    var answer1 = $('.js-answer1').val();
    if (answer1 == 0) {
      $('.js-answer1').css("background-color", "red");
    } else {
      $('.js-answer1').css("background-color", "lightgreen");
    }

    var answer2 = $('.js-answer2').val();
    if (answer2 == 0) {
      $('.js-answer2').css("background-color", "red");
    } else {
      $('.js-answer2').css("background-color", "lightgreen");
    }

    var answer3 = $('.js-answer3').val();
    if (answer3 == 0) {
      $('.js-answer3').css("background-color", "red");
    } else {
      $('.js-answer3').css("background-color", "lightgreen");
    }
    var answerTotals = parseInt(answer1) + parseInt(answer2) + parseInt(answer3);
    $('.js-total2').html(answerTotals);
  }
});
