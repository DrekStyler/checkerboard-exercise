// Your JS goes here


for (var i = 0; i < 100; i++) {
  $('body').append(`<div class="first"></div>`);
  $('body').append(`<div class="second"></div>`);
  $('.first').css('background-color','red');
  $('.second').css('background-color','black');
  $('.first').css('float','left').css('paddingBottom','11.1%').css('width','11.1%');
  $('.second').css('width','11.1%').css('float','left').css('paddingBottom','11.1%');
}
