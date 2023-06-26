$(document).ready(function () {

  $('.btn').click(function () {
    console.log("Hello Click me");
  });

  $('.btn').dblclick(function () {
    console.log("Hello dblClick me");
  });

  $('.btn').hover(function () {
    $(this).css('background', 'red')
  });

  $('.btn').mousemove(function () {
    console.log('Hello Move');
  });

  $('.btn').mouseleave(function () {
    alert('Hello!')
  });

  $('.btn').mouseout(function () {
    $('body').css({
      background: 'lightblue',
    })
  });

  $('.btn').mouseover(function () {
    $('body').css({
      background: 'red',
    })
  });



});