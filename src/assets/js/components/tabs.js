$(function() {

    "use strict";

    $("[data-tabs-for] a").on("click", function(e) {
        e.preventDefault();

        var $this = $(this),
            tabs = $this.parent().data("tabs-for"),
            currentTab = $this.attr("href");

        /**
        * Remove active class from nav elements
        * Hide not active tab panel
        */
        if( !$this.hasClass("active") ) {
            $(tabs).find("[data-tabs-for] a").removeClass("active");
            $(tabs).find(".tabs__item").slideUp("300");
        }

        /**
        * Add active class for current nav item
        * Show active tab panel
        */
        $this.addClass("active");
        $(currentTab).slideDown("300");
    });

});
