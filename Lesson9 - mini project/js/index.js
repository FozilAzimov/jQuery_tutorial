$(document).ready(function () {

  $('ul>li>img').click(function (event) {
    $('.blur').addClass('active');
    $('.box').removeClass('hide');
    var url = event.target.attributes.src.nodeValue;
    $('.active_img').attr('src', url);
  })

  $('.close').click(function () {
    $('.blur').removeClass('active');
    $('.box').addClass('hide');
  })

})