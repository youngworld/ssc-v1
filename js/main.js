$(document).ready(function() {

// Hide all chapters at first //

$('#chapterA').hide();
$('#chapterB').hide();
$('#chapterC').hide();
$('#chapterD').hide();


// After making choice, show first chapter //

$('.choiceA').click(function() {
  $('#chapterA').show();
  $('.choices').hide();
});

$('.choiceB').click(function() {
  $('#chapterB').show();
  $('.choices').hide();
});

$('.choiceC').click(function() {
  $('#chapterC').show();
  $('.choices').hide();
});

$('.choiceD').click(function() {
  $('#chapterD').show();
  $('.choices').hide();
});


// At end of first chapter, click Next to show next random chapter //




  // generate random number between 2-4

    // if 2,



$('.video').click(function() {
  $('.active').removeClass('active');
  $(this).addClass('active');

});




});