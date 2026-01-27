// $(document).ready(function logicfunction() {
//     $("#secondonecontent").hide();
//     $("#thirdonecontent").hide();

//     $("#firstone").click(function firstonefunction() {
//         $("#firstonecontent").show();
//         $("#secondonecontent").hide();
//         $("#thirdonecontent").hide();
//     })
//     $("#secondone").click(function secondonefunction() {
//         $("#firstonecontent").hide();
//         $("#secondonecontent").show();
//         $("#thirdonecontent").hide();
//     })
//     $("#thirdone").click(function thirdonefunction() {
//         $("#firstonecontent").hide();
//         $("#secondonecontent").hide();
//         $("#thirdonecontent").show();
//     })

// })
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})


$('.multiple-items').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});