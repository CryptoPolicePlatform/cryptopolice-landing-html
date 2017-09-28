$(function() {

    "use strict";

    $('[data-toggle="dropdown"]').on("click", function(e) {
        e.preventDefault();

        var $this = $(this),
            dropdown = $this.next("[data-dropdown]");

        if(dropdown.is(":visible")) {
            dropdown.slideUp("fast");
        } else {
            $("[data-dropdown]").slideUp("fast");
            dropdown.slideToggle("fast");
        }
    });

    /**
    * Close dropdown on click somewhere
    */
    $("body").on("click", function() {
        $("[data-dropdown]").slideUp("fast");
    });


    /**
    * Close dropdown when resize browser
    */
    $(window).on("resize", function() {
        $("[data-dropdown]").slideUp("fast");
    });


    /**
    * Don't close dropdown when click on dropdown and button
    */
    $('[data-toggle="dropdown"], [data-dropdown]').on("click", function(e) {
        e.stopPropagation();
    });
});
