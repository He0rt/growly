$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event){
  $(this).toggleClass('active');
  $('.menu__body').toggleClass('active');
  $('body').toogleClass('lock');
});

function ibg(){
  $.each($('.ibg'),function(index,val){
    if($(this).find(img).length>0){
      $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
  });
}

ibg();
//иницализация слик-слайдера
$(document).ready(function(){
    $('.slider-name').slick({
    });
  });

