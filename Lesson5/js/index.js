$(document).ready(() => {

  $('input').attr('placeholder', 'url img push');
  $('button').click(() => {
    var $url = $('input').val();
    $('img').attr({
      'src': $url,
      'alt': 'imgs',
      'style': `
      width: 500px;
      display: block;
      `
    })
  })

});
