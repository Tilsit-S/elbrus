$(document).ready(function(){
    $('.blog__slider').slick({
        arrows: false,
        dots: false,
        variableWidth: false,
        adaptiveHeight: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    swipe: true,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    swipe: true,
                },
            },
        ],
    }
    );
});

