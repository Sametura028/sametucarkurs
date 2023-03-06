$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    autoplay: true,
    arrows: false,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
      {
        breakpoint: 992,
        settings: {
            slidesToShow: 1.75,
            slidesToScroll: 2,
            infinite: true,
            dots: true
        }
      },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});$('.slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    autoplay: true,
    arrows: false,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
      {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
        }
      },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
$('.dropdown-toggle').dropdown()