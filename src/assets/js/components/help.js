$(function() {

    "use strict";

    $("#help_toggle").on("click", function(event) {

        event.preventDefault();

        $(".help__ico").toggleClass("open");

    });

});
