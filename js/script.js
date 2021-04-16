
$(document).ready(function(){
  // slider
  $(".owl-carousel").owlCarousel({
  	items: 5,
  	loop: true,
  	nav: true,
  	   responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:3,
            margin: 5,
            nav:false
        },
        1200:{
            items:5,
            nav:false,
            margin: 5,
            loop:false
        }
    }
  });
      
});

