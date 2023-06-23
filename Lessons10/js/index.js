$(document).ready(function () {

  $('.parent').click(function () {
    var attribute = $(this).parent().attr('class');
    console.log(attribute);
  })

  $('.parents').click(function () {
    var tagName = Array.from($(this).parents());
    tagName.forEach(item => {
      console.log(item);
    })
  })

  $('.parentsUntil').click(function () {
    var p_u = $(this).parentsUntil('body');
    console.log(p_u);
  })

})