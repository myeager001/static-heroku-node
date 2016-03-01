$(document).ready(function(){
  $("#button1").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 500);
  });
  $("#button2").click(function() {
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 750);
  });
  $("#button3").click(function() {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1000);
  });
})
