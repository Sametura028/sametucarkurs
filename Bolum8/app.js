// $('#boxs-dersler').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     centerMode: true,
//     adaptiveHeight: true,
//     centerPadding: '40px',
//     variableWidth: true
//   });

$('#kurs').slick({
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
        dots: true,
        arrows :true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows :false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows :false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('#dersler').slick({
  dots: true,
  infinite: true,
  centerMode: true,
  arrows :false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 923,
      settings: {
        dots: false,
        arrows :true,
        centerMode: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        dots: false,
        infinite: false,
        arrows :true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.main-comment').slick({
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
});