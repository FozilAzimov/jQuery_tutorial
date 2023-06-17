$(document).ready(() => {

  var arr = Array.from($("li a"));

  arr.map(value => {
    console.log(value.innerText);
  });


  $('li').click(function () {
    $(this).hide();
  })

  $('button').click(function () {
    $('a').hide();
  })

});
