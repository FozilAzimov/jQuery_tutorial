$(document).ready(function () {
  var obj = { name: 'webbrain', age: 4 }
  var data = JSON.stringify(obj);
  localStorage.setItem('data', `${data}`);
  var value = JSON.parse(localStorage.getItem('data'));
  console.log(value);
});