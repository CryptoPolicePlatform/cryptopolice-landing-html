//= ../../../../bower_components/slick-carousel/slick/slick.js

$(function() {

    "use strict";

    /**
    * Slick.js
    * Docs: https://github.com/kenwheeler/slick
    */

    var team_slider = $("#team_slider"),
        team_info = $("#team_info");

    team_slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        variableWidth: true,
        centerMode: true,
        centerPadding: "0",
        focusOnSelect: true,
        swipeToSlide: true,
        initialSlide: 7,
        asNavFor: "#team_info"
    });

    team_info.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: "#team_slider",
        swipe: false,
        fade: true,
        initialSlide: 7
    });

});
