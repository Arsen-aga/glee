import('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js');

$(function () {
  $('.slider-inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  
  var mixer = mixitup('.products__mix-items',{
    animation: {
      duration: 357,
      nudge: true,
      reverseOut: true,
      effects: "fade scale(0.01) translateY(20%) rotateX(90deg)"
    }
  }).show();
  
  
  var mixer2 = mixitup('.ndesign__mix-items',{
    animation: {
      duration: 357,
      nudge: true,
      reverseOut: true,
      effects: "fade scale(0.01) translateY(20%) rotateX(90deg)"
    }
  }).show();
  
});
