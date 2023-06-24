$(document).ready(function () {

  // $('.btn1').click(function () {
  //   var sibling = $(this).parent().siblings();
  //   Array.from(sibling).forEach(item => {
  //     console.log(item);
  //   })
  // });

  // $('.btn2').click(function () {
  //   var next = $(this).parent().next();
  //   console.log(next);
  // });

  // $('.btn1').click(function () {
  //   var nextAll = $(this).parent().nextAll();
  //   console.log(nextAll);
  // });

  // $('.btn2').click(function () {
  //   $(this).parent().nextUntil().css('color', 'red');
  // });


  // $('.btn3').click(function () {
  //   var prev = $(this).parent().prev();
  //   console.log(prev);
  // });

  // $('.btn2').click(function () {
  //   $(this).parent().prevUntil().css('color', 'green');
  // });

  // $('.btn3').click(function () {
  //   $(this).parent().prevAll().css('backgroundColor', 'silver')
  // });

  $('.lightMode').click(function () {
    $('body').css({
      color: 'black',
      background: 'white'
    })
    $('button').css({
      color: 'black'
    })
  })

  $('.darkMode').click(function () {
    $('body').css({
      color: 'white',
      background: 'black'
    })
    $('button').css({
      color: 'white',
      background: 'silver'
    })
  })



})