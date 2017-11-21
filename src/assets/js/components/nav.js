$(function() {

    "use strict";

    $("[data-toggle=nav]").on("click", function(event) {
        $("#nav_toggle").slideToggle();
    });


    $(window).on("resize", function(event) {
        $("#nav_toggle").removeAttr("style");
    });

});
