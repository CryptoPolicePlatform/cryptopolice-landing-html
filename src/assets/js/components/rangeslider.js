//= ../../../../bower_components/rangeslider.js/dist/rangeslider.js

$(function() {

    "use strict";

    /**
    * Range Slider
    * Docs: https://github.com/andreruffert/rangeslider.js
    */

    var $r = $('input[type="range"]'),
        rangeInput = $("[data-range-input]");

    $r.each(function() {

        $(this).rangeslider({
            polyfill: false
        }).on('input', function() {
            var $this = $(this),
                inputID = $this.data("slider"),
                rangeVal = this.value;

            $(inputID).text(rangeVal);
        });
    });

});
