$(document).ready(function() {


// Declare variables to associate styled text chapters //

var chapterA = '<article id="chapterA"><a name="A" class="anchor"></a><h2>Chapter A</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" class="video-link" alt="Video">Cum dolores quaerat nemo non eaque excepturi</a>, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p></article>'
var chapterB = '<article id="chapterB"><a name="B" class="anchor"></a><h2>Chapter B</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" class="video-link" alt="Video">Cum dolores quaerat nemo non eaque excepturi</a>, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p></article>'
var chapterC = '<article id="chapterC"><a name="C" class="anchor"></a><h2>Chapter C</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" class="video-link" alt="Video">Cum dolores quaerat nemo non eaque excepturi</a>, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p></article>'
var chapterD = '<article id="chapterD"><a name="D" class="anchor"></a><h2>Chapter D</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores quaerat nemo non eaque excepturi, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" class="video-link" alt="Video">Cum dolores quaerat nemo non eaque excepturi</a>, dicta veritatis sed! Tempora cupiditate quisquam, aliquam rem quos! Eligendi, exercitationem molestias porro est nobis?</p></article>'

var VA1 = '<div class="video-wrapper" id="scrollDown"><div class="video active"></div></div>'
var VA2 = '<div class="video-wrapper"><div class="video"></div><div class="video active"></div></div>'
var VA3 = '<div class="video-wrapper"><div class="video"></div><div class="video"></div><div class="video active"></div></div>'
var VA4 = '<div class="video-wrapper"><div class="video"></div><div class="video"></div><div class="video"></div><div class="video active"></div></div>'

var next = '<div class="next">V</div>'

var videoA = '<video width=800 autoplay loop><source src="videos/videoA.mp4" type="video/mp4"/></video>' 
var videoB = '<video width=800 autoplay loop><source src="videos/videoB.mp4" type="video/mp4"/></video>'
var videoC = '<video width=800 autoplay loop><source src="videos/videoC.mp4" type="video/mp4"/></video>' 
var videoD = '<video width=800 autoplay loop><source src="videos/videoD.mp4" type="video/mp4"/></video>' 



// Declare array of styled story chapters in pre-arranged order //

var storyLeft = [chapterA, chapterB, chapterC, chapterD];
var videos = [];



// CHOOSE FIRST CHAPTER //

$('.next').hide();

// Start A //

$('#choiceA').click(function() {
  $('.choices').hide();
  storyLeft.splice(0, 1);
  videos.push(videoA);
  $('.story-wrapper').append(chapterA , VA1);
  scroll(".story-wrapper", 200);
  $('.video-wrapper').hide();
  $('.video-wrapper div.active').append(videoA);
  $('.next').show();
});


// Start B //

$('#choiceB').click(function() {
  $('.choices').hide();
  videos.push(videoB);
  storyLeft.splice(1, 1);
  $('.story-wrapper').append(chapterB, VA1);
  scroll(".story-wrapper",200);
  $('.video-wrapper').hide();
  $('.video-wrapper div.active').append(videoB);
  $('.next').show();
});


// Start C //

$('#choiceC').click(function() {
  $('.choices').hide();
  videos.push(videoC);
  storyLeft.splice(2, 1);
  $('.story-wrapper').append(chapterC, VA1);
  scroll(".story-wrapper",200);
  $('.video-wrapper').hide();
  $('.video-wrapper div.active').append(videoC);
  $('.next').show();

});

// Start D // 

$('#choiceD').click(function() {
  $('.choices').hide();
  videos.push(videoD);
  storyLeft.splice(3, 1);
  $('.story-wrapper').append(chapterD, VA1);
  scroll(".story-wrapper",200);
  $('.video-wrapper').hide();
  $('.video-wrapper div.active').append(videoD);
  $('.next').show();

});


$('body').on('click','.video-link' , function(event){
  event.preventDefault();
  $('.video-wrapper').show();
  scroll(".video-wrapper",0);



});

function scroll(classto, deduce){
  // var value = '.' + classto;

  $("html, body").delay(100).animate({
        scrollTop: $(classto).offset().top - deduce
    }, 1000);
}

// $('body').on('click', 'video-link', function(event){
//   event.preventDefault(),
//   var targetVideo = $(this).data('video-src');
//   $('.story-wrapper').append(targetVideo);
// });


// RANDOM REMAINING CHAPTERS //



  $('body').on('click', '.next', function() {

    var randomChapter = storyLeft[Math.floor(Math.random()*storyLeft.length)];
    var randomChapterNum = storyLeft.indexOf(randomChapter);  
    

      switch (randomChapter) {
      
        case chapterA:
          console.log("chapterA")
          videos.push(videoA);
          break;

        case chapterB:
         console.log("chapterB")
          videos.push(videoB);
          break;

        case chapterC:
         console.log("chapterC")
          videos.push(videoC);
          break;

        case chapterD:
         console.log("chapterD")
          videos.push(videoD);
          break;
      }

         
          if (storyLeft.length === 3) {
            $('.video-wrapper').remove();
            $('.story-wrapper').append(randomChapter, VA2); 
            $('.video-wrapper').hide();
            
            storyLeft.splice (randomChapterNum, 1);
            attachvideo (); 

            $('.video').click(function() {
            $('.active').removeClass('active');
            $(this).addClass('active');
            });


          } else if (storyLeft.length === 2) {
            $('.video-wrapper').remove();
            $('.story-wrapper').append(randomChapter, VA3);
            // $('.video-wrapper').slideUp(500);
            $('.video-wrapper').hide(); 
            
            storyLeft.splice (randomChapterNum, 1);
            attachvideo (); 
          
            $('.video').click(function() {
            $('.active').removeClass('active');
            $(this).addClass('active');
            });
         

          } else  {
            $('.video-wrapper').remove();
            $('.story-wrapper').append(randomChapter, VA4);
            $('.video-wrapper').hide();
            // $('.video-wrapper').slideUp(500);
            $('.next').hide();
            
            storyLeft.splice (randomChapterNum, 1);
            attachvideo (); 

            $('.video').click(function() {
            $('.active').removeClass('active');
            $(this).addClass('active');
            });

          }
          
          // scroll("article:last",0);

  });

  function attachvideo () {
    $('.video-wrapper:last div').each(function(i) {
    console.log(videos[i]);
    $(this).append(videos[i]);


    });
  }


});