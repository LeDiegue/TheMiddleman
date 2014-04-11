/*$(document).ready(function () {

  //Slider
  var intervalo;
  $panel = $('.panel');
  $click = $('.click');
  $click.on('click', function(){
    $title = $(this).parent().attr('href');
    $panel.fadeOut(500);
    $var = $(".panel[title="+ $title +"]");
    $var.fadeIn(500);
    clearInterval(intervalo);

  });


  var sliderC = function(){
    $('#slider div:gt(0)').hide();
    intervalo = setInterval(function(){
      $('#slider div:first-child').fadeOut(2000).next('div').fadeIn(800).end().appendTo('#slider');}, 5000);
    }

  sliderC();

  //Slider


});
*/
