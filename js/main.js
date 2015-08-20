$(document).ready(function() {

// Hide all chapters at first //

$('#chapterA').hide();
$('#chapterB').hide();
$('#chapterC').hide();
$('#chapterD').hide();

// Declare array //

var story = [];

// Declare a counter //

var chaptercount = 0;


// Start story with user choice of chapters (click 'Choice') //

$('#choiceA').click(function() {
  $('#chapterA').show();
  $('.choices').hide();
  story.push('#chapterA');
  chaptercount = 1;
  console.log(story, story.length);
  console.log(chaptercount);
});

$('#choiceB').click(function() {
  $('#chapterB').show();
  $('.choices').hide();
  story.push('#chapterB');
  chaptercount = 1;
  console.log(story, story.length);
  console.log(chaptercount);
});

$('#choiceC').click(function() {
  $('#chapterC').show();
  $('.choices').hide();
  story.push('#chapterC');
  chaptercount = 1;
  console.log(story, story.length);
  console.log(chaptercount);
});

$('#choiceD').click(function() {
  $('#chapterD').show();
  $('.choices').hide();
  story.push('#chapterD');
  chaptercount = 1;
  console.log(story, story.length);
  console.log(chaptercount);
});


// Remaining chapters generate one-by-one at random (click 'Next') //

do {

  // listen for 'Next' click
  // function to generate random number between 0(included) and 3(excluded)

  function getRandom() {
    return Math.floor(Math.random() * 3 + 0()
  }

  // iterate chapter counter
  // loop until chapter counter reaches 4

}

while (chaptercount < 4);





// Animate video arrangement //

$('.video').click(function() {
  $('.active').removeClass('active');
  $(this).addClass('active');

});




});