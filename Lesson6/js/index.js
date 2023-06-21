$(document).ready(() => {

  $('button').click(() => {
    var $value = $('input').val();
    $('.parent').append('<h1><a href="#">' + $value + '</a></h1>');
    $('input').val(null);

    // $('.parent').append('<img src=' + $value + '/>');
  })

});
