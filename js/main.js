$(document).ready(function() {


// Declare variables to associate styled text chapters //

var chapterA = '<article id="chapterA"><a name="A" class="anchor"></a><h2>Chapter A</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="video1.html" alt="Video">Cum dolores quaerat nemo non eaque excepturi</a>, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p></article>'
var chapterB = '<article id="chapterB"><a name="B" class="anchor"></a><h2>Chapter B</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="video1.html" alt="Video">Cum dolores quaerat nemo non eaque excepturi</a>, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p></article>'
var chapterC = '<article id="chapterC"><a name="C" class="anchor"></a><h2>Chapter C</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="video1.html" alt="Video">Cum dolores quaerat nemo non eaque excepturi</a>, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p></article>'
var chapterD = '<article id="chapterD"><a name="D" class="anchor"></a><h2>Chapter D</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="video1.html" alt="Video">Cum dolores quaerat nemo non eaque excepturi</a>, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p></article>'

var next ='<div class="next">Next</div>'


// Declare array of styled story chapters in pre-arranged order //

var storyLeft = [chapterA, chapterB, chapterC, chapterD];


// CHOOSE FIRST CHAPTER //

// Start A //

$('#choiceA').click(function() {
  $('.choices').hide();
  storyLeft.splice(0, 1);
  $('.story-wrapper').append(chapterA, next);
  console.log(storyLeft, storyLeft.length);
});


// Start B //

$('#choiceB').click(function() {
  $('.choices').hide();
  storyLeft.splice(1, 1);
  $('.story-wrapper').append(chapterB, next);
  console.log(storyLeft, storyLeft.length);
});


// Start C //

$('#choiceC').click(function() {
  $('.choices').hide();
  storyLeft.splice(2, 1);
  $('.story-wrapper').append(chapterC, next);
  console.log(storyLeft.length);
});

// Start D // 

$('#choiceD').click(function() {
  $('.choices').hide();
  storyLeft.splice(3, 1);
  $('.story-wrapper').append(chapterD, next);
  console.log(storyLeft.length);
});



// RANDOM REMAINING CHAPTERS //


$('body').on('click', '.next', function() {

    var randomChapter = storyLeft[Math.floor(Math.random()*storyLeft.length)];
    var randomChapterNum = storyLeft.indexOf(randomChapter);
    storyLeft.splice (randomChapterNum, 1);
    $('.story-wrapper').append(randomChapter, next);

    console.log(storyLeft, storyLeft.length);
    console.log(randomChapterNum);

 });



// ANIMATE VIDEO ARRANGEMENTS //

$('.video').click(function() {
  $('.active').removeClass('active');
  $(this).addClass('active');

  });


});