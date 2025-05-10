$(document).ready(function(){
    $('.advice__tabsSlider').slick({
        arrows: false,
        dots: false,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        swipe: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 834,
                settings: {
                    swipe: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    );
});