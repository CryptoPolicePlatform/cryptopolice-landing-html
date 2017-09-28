//= ../../../../bower_components/waypoints/lib/jquery.waypoints.js
//= ../../../../bower_components/jquery.counterup/jquery.counterup.js

$(function() {

    "use strict";

    /**
    * Counter Up
    * Docs: https://github.com/bfintal/Counter-Up
    */

    var counter = $("[data-counter]");

    if(counter.length > 0) {
        counter.each(function() {

            var $this = $(this),
                time = $this.data("time"),
                delay = $this.data("delay");

            $this.counterUp({
                delay: delay,
                time: time
            });
        });
    }

});
