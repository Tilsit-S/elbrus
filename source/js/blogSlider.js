$(document).ready(function(){
    $('.blog__slider').slick({
        arrows: false,
        dots: false,
        variableWidth: true,
        adaptiveHeight: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1743,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    }
    );
});
