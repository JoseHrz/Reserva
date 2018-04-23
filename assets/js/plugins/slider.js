$(document).ready(function(){

  $('.slider').slick({
    autoplay: false,
    speed: 1000,
    autoplaySpeed:6000,
    pauseOnHover:false,
    pauseOnDotsHover:false,
    pauseOnFocus:false,
    arrows: true,
    dots: true,
    fade:true,
    adaptiveHeight: true,
    cssEase: 'linear'
  }).slickAnimation();


  // $('#slick-slide-control00').click(function(){
  //   $('.slick-dots > li > button').css('border-color','#313b86');
  // });


  // $('#slick-slide-control01').click(function(){
  //   $('.slick-dots > li > button').css('border-color','#fff');
  // });


  // $('#slick-slide-control02').click(function(){
  //   $('.slick-dots > li > button').css('border-color','#fff');
  // });
  //
  //
  // $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //     if($('#slick-slide00').hasClass('slick-current') || $('#slick-slide01').hasClass('slick-current')){
  //       $('.slick-dots > li > button').css('border-color','#313b86');
  //     }else{
  //       $('.slick-dots > li > button').css('border-color','#fff');
  //     }
  // });


});
