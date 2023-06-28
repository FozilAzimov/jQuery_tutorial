$(document).ready(function () {

  $('input').focus(function () {
    $(this).css({
      border: '2px solid red',
    }).on("keydown keypress keyup", function () {
      if ($(this).val().length > 7) {
        $(this).blur().css({
          border: '2px solid lightgreen',
        }).next().focus();
      }
    })
  })

  $('button').click(function (event) {
    event.preventDefault();
    var data = $('form').children();
    data.each((index, item) => {
      console.log(item.value);
    });
  })

  $('select, input[type=radio]').change(function (e) {
    e.preventDefault();
    console.log(e.target.value);
  });

  $('.test').select(function (e) {
    console.log(e.target.value);
  })

});