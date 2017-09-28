$(function() {

    "use strict";

    $(".alert__button").on("click", function(e) {
        e.preventDefault();

        var $this = $(this),
            alert = $this.parents(".alert");

        /**
        * Remove alert from DOM
        */
        alert.fadeOut("fast", function(){
           $(this).remove();
        });
    });

});
