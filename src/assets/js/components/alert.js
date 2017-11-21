$(function() {

    "use strict";

    $(".alert__close").on("click", function(e) {
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
