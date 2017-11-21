$(function() {

    "use strict";

    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        var target = $(this).data('target'),
            offset = $(target).offset().top;

        $("body, html").animate({
            scrollTop: offset - 70
        }, 700);
    });

    var wScroll = $(document).scrollTop();
    checkScroll();

    $(document).on("scroll", function() {
        checkScroll();
    });

    function checkScroll() {
        wScroll = $(document).scrollTop();

        if(wScroll > 0) {
            $("#nav").addClass('fixed');
        } else {
            $("#nav").removeClass('fixed');
        }
    }


});

