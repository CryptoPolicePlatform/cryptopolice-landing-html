//= ../../../../bower_components/jquery-sticky/jquery.sticky.js

$(function() {

    "use strict";

    /**
    * Sticky
    * Docs: https://github.com/garand/sticky
    */

    var stickyEl = $("[data-sticky]");

    if(stickyEl.length > 0) {
        stickyEl.sticky({
            topSpacing: 20,
            bottomSpacing: 20
        });
    }

});
