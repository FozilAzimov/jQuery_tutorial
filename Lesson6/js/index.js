$(document).ready(() => {

  $('.btn1').click(() => {
    var $value = $('input').val();
    $('.parent').append('<h1><a href="#">' + $value + '</a></h1>');
    $('input').val(null);

    // $('.parent').append('<img src=' + $value + '/>');
  })

  $('.btn2').click(() => {
    $('.parent').remove();
  })

  $('.btn3').click(() => {
    $('.parent').empty();
  })

});
