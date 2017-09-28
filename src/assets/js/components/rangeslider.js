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

            $(inputID).val(rangeVal);
        });
    });

    /* Check for only numbers on input */
    rangeInput.on("input", function() {
        var $this = $(this),
            sliderID = $this.attr("id"),
            currentSlider = $("[data-slider='#"+sliderID+"']"),
            min = parseInt($(currentSlider).attr("min")),
            currentVal = parseInt($this.val());

        if(isNaN(currentVal)) {
            $this.val(min);
            currentSlider.val(min).rangeslider('update', true);
        } else {
            $this.val(currentVal);
        }
    });

    /* Check for min and max values on input */
    rangeInput.on("change", function() {

        var $this = $(this),
            sliderID = $this.attr("id"),
            currentSlider = $("[data-slider='#"+sliderID+"']"),
            min = parseInt($(currentSlider).attr("min")),
            max = parseInt($(currentSlider).attr("max")),
            currentVal = parseInt($this.val());

        currentSlider.val(currentVal).rangeslider('update', true);

        if(currentVal < min) {
            $this.val(min);
            currentSlider.val(min).rangeslider('update', true);
        }

        if(currentVal > max) {
            $this.val(max);
            currentSlider.val(max).rangeslider('update', true);
        }
    });

    /* Select input value on focus */
    rangeInput.on("focus", function() {
       $(this).select();
    });


    /* +/- RangeSlider buttons
    =========================*/

    $('[data-range-btn]').click(function() {
        var $this = $(this),
            sliderID = $this.data("for"),
            currentSlider = $("input[type='range'][data-slider='"+sliderID+"']"),
            step = parseInt($(currentSlider).attr("step")),
            currentVal = parseInt($(currentSlider).val()),
            type = $this.data("range-btn");

        if(type == "minus") {
            var min = parseInt($(currentSlider).attr("min"));

            if(currentVal > min) {
                $(currentSlider).val(currentVal - step);
                $(sliderID).val(currentVal - step);
            }
        }

        if(type == "plus") {
            var max = parseInt($(currentSlider).attr("max"));

            if(currentVal < max) {
                $(currentSlider).val(currentVal + step);
                $(sliderID).val(currentVal + step);
            }
        }
        currentSlider.rangeslider('update', true);
    });

});
