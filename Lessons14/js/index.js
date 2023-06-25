$(document).ready(function () {

  setTimeout(() => {
    $('.spinner').fadeOut();
    $('.box').addClass('active');
  }, 5000);

  $('.btn').on('click', function () {
    alert('Hello!');
    $(this).off();
  });

  $('.btn2').one('click', function () {
    console.log('one clickked');
  });

});