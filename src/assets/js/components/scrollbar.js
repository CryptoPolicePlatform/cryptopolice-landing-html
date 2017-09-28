//= ../../../../bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js

$(function() {

    "use strict";

    /**
    * Scrollbar
    * Docs: https://github.com/malihu/malihu-custom-scrollbar-plugin
    */

    var scrollBar = $("[data-scrollbar]");

    $(window).on("load", function() {
        scrollBar.mCustomScrollbar({
            axis: "y" // "x", "y", or "yx"
        });
    });


});
