$(document).ready(function () {

  // $('li').first().css('backgroundColor', 'red');// birinchi Listni topadi

  // $('li').last().css({
  //   background: 'green',
  // });// songi Listni topadi

  // $('li').eq(5).css({
  //   background: 'blue',
  // });// index bo'yicha Listni topdi

  // $('li').filter('.fil').css({
  //   background: 'coral'
  // });// li elementining qay birida shu class borligini filter qiladi

  // var not = $('li').not('.fil');
  // console.log(not);// shu class mavjud bo'lmaganlarini topadi, filterning teskarisi.

  // $('li.fil').closest('ul').css({
  //   background: 'lightblue',
  // })


  $('.next').click(function () {
    $('.active').next().addClass('active')
    $('.active').prev().removeClass('active')
    var fistItem = $('.item').length;
    if (!$('.active').nextUntil().length) {
      $('.item').eq(fistItem - 5).addClass('active');
      $('.item').last().removeClass('active');
    }
  })

  $('.prev').click(function () {
    $('.active').prev().addClass('active')
    $('.active').next().removeClass('active')
    var lastItem = $('.item').length;
    if (!$('.active').prevUntil().length) {
      $('.item').eq(lastItem - 2).addClass('active');
      $('.item').first().removeClass('active');
    }
  })


})