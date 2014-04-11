$(document).ready ->
 intervalo = undefined
 $panel = $('.panel');
 $click = $('.click');
 $click.on "click", ->
   $title = $(this).parent().attr('href')
   $panel.fadeOut 500
   $var = $(".panel[title=" + $title + "]")
   $var.fadeIn 500
   clearInterval intervalo
   return

 sliderC =  ->
   $("#slider div:gt(0)").hide()
   intervalo = setInterval(->
    $("#slider div:first-child").fadeOut(2000).next("div").fadeIn(800).end().appendTo "#slider"
    return
   , 5000)
   return

  sliderC()
  return
