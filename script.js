$(function(){
  /*modal for coming soon*/
  $('.back-link').click(function(){
    $('.modal').fadeIn();
  });
  $('.fa-circle-xmark').click(function(){
    $('.modal').fadeOut(1000); 
  });
  
  /*Interaction with the navbar when opened and closed*/
  $('.hamburger').click(function(){
    $('.hamburger').fadeOut(20);
    $('.circle-mark').fadeIn(30);
  });
  $('.circle-mark').click(function(){
    $('.circle-mark').fadeOut(20);
    $('.hamburger').fadeIn(30);
  });
  
  $('.section-two-list').click(function(){
    $('.active').removeClass('active');
 var clickedIndex = $('.section-two-list').index($(this));
    $('.fire').eq(clickedIndex).addClass('active');
    $('.water').eq(clickedIndex).addClass('active');
  });
  
  $('.section-seven-list').click(function(){
    $('.block').removeClass('block');
    var button = $('.section-seven-list').index($(this));
    $('.section-seven-container').eq(button).addClass('block');
  });
  
  $('.section-eight-list').click(function(){
    $('.solid').removeClass('solid');
    var clickedText = $('.section-eight-list').index($(this));
    $('.section-eight-container').eq(clickedText).addClass('solid');
  });
  $('.one').click(function(){
    $('.img-active').removeClass('img-active');
    var clickedImg = $('.one').index($(this));
    $('.shop-section-two-content-img').eq(clickedImg).addClass('img-active');
    $('.shop-section-two-content-text').eq(clickedImg).addClass('img-active');
    $('.shop-section-two-content-text').css('color',$(this).attr('data-color'));
  });
  $('.two').click(function(){
    $('.text-solid').removeClass('text-solid');
    var clickedImg = $('.two').index($(this));
    $('.shop-section-two-content-imgg').eq(clickedImg).addClass('text-solid');
    $('.shop-section-two-content-textt').eq(clickedImg).addClass('text-solid');
    $('.shop-section-two-content-textt').css('color',$(this).attr('data-color'));
  });
});