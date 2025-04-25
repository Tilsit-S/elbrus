$(document).ready(function(){
    $('.mainPrice__slider').slick({
        arrows: true,
        dots: false,
        variableWidth: true,
        adaptiveHeight: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                },
            },
        ],
    }
    );
});
