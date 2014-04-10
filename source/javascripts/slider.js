$(document).ready(function () {

  $panel = $('.panel');
  $click = $('.click');
  $click.on('click', function(){
    $title = $(this).parent().attr('href');
    $panel.removeClass('active');
    $var = $(".panel[title="+ $title +"]");
    $var.addClass('active');
  })
});
