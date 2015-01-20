"use strict";

$('.container').on('click', '.fa-play', function() {

  $('.fa').not(this).removeClass('fa-stop').addClass('fa-play');
  $(this).removeClass('fa-play').addClass('fa-stop');
  var title = $(this).data('title');
  $('h2').html("Now Playing:" + title);


  $('.container').on('click', '.fa-stop', function() {
    $(this).removeClass('fa-stop').addClass('fa-play');
    $('h2').html("Select a Song!");
    var sound = document.getElementById(id);
    sound.stop();

  });

  var id =$(this).data('id');
  var sound = document.getElementById(id);

    sound.play();

    document.addEventListener('click', function(current){
      var otherAudio = document.getElementByTagName('audio');
      for(var i = 0, length = otherAudio.length; i < length; i++){
        if (otherAudio[i] != current.target){
          otherAudio[i].pause();
        }
      }
    }, true);

});




jQuery.getJSON('data.json', function(tracks) {
  var $tracksTemplate = $('#tracksTemplate').html();
  var newHTML = Mustache.to_html($tracksTemplate, tracks);

  $('.tracks').html(newHTML)
});
