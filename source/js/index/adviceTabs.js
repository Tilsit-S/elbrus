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
        swipe: false,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    swipe: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 834,
                settings: {
                    swipe: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    swipe: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    }
    );
});