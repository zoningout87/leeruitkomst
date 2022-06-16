/* JS FILE */
var cats = [
    { name: "Bleu russe", votes: 0 },
    { name: "Somali", votes: 0 },
    { name: "egyptian mau", votes: 0},
    { name: "snowshoe", votes: 0 }
  ]
  
  
  /*globle $, alert, console*/
  $(function () {
    'use strict';
  
    $('.cat-1 .overlay').on('click', function () {
      cats[0].votes += 1;
      $(this).parent().find('.votes').text(cats[0].votes);
    });
  
    $('.cat-2 .overlay').on('click', function () {
      cats[1].votes += 1;
      $(this).parent().find('.votes').text(cats[1].votes);
    });
  
    $('.cat-3 .overlay').on('click', function () {
      cats[2].votes += 1;
      $(this).parent().find('.votes').text(cats[2].votes);
    });
  
    $('.cat-4 .overlay').on('click', function () {
      cats[3].votes += 1;
      $(this).parent().find('.votes').text(cats[3].votes);
    });
  
    $('.All-cats li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      var on_air = '.' + $(this).data('class');
      $(on_air).addClass('display-b').siblings().removeClass('display-b');
    });
  
  });
  