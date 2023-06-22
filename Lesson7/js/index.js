$(document).ready(function () {

  $('.btn').click(function () {
    $('.title').addClass('red');
    $('.text').addClass('size');
  }).css({
    padding: '20px',
    margin: '50px'
  });

  $('.btn2').click(function () {
    $('.title').removeClass('red');
    $('.text').removeClass('size');
  }).css({
    padding: '20px',
    margin: '50px'
  });

  $('.btn3').click(function () {
    $('.title').toggleClass('red');
    $('.text').toggleClass('size');
  }).css({
    padding: '20px',
    margin: '50px'
  });

  $('.box').css({
    width: '200px',
    height: '200px',
    margin: '50px',
    border: '1px solid black',
    cursor: 'pointer'
  }).click(function () {
    var box = $('.box').hasClass('active');
    box ? $(this).removeClass('active') : $(this).addClass('active');
  })

})