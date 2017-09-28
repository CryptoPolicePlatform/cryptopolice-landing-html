//= ../../../../bower_components/slick-carousel/slick/slick.js

$(function() {

    "use strict";

    /**
    * Slick.js
    * Docs: https://github.com/kenwheeler/slick
    */

    var slider_1 = $("#js-slider-1");

    if(slider_1.length > 0) {
        slider_1.slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }


    var slider_2 = $("#js-slider-2");

    if(slider_2.length > 0) {
        slider_2.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

});
