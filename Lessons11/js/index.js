$(document).ready(function () {

  $('.btn').click(function () {
    var ch = $(this).parent().children();
    Array.from(ch).forEach(item => {
      console.log(item);
    })
  })

  $('.btn').click(function () {
    var f = $(this).parents().find('h3');
    console.log(f);
  })

})