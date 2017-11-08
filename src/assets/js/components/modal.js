//= ../../../../bower_components/remodal/dist/remodal.js

$(function() {

    "use strict";

    /**
    * Remodal
    * Docs: https://github.com/VodkaBears/Remodal
    */

    $("[data-toggle=remodal]").on("click", function(e) {
        e.preventDefault();

        var modal_id = $(this).data("target");

        var modal = $(modal_id).remodal({
            hashTracking: false
        });

        modal.open();
    });



    var dont_miss_modal = $('#dont_miss_modal').remodal();
    glio.init(
      [ 'top', function () {
          dont_miss_modal.open();
        }
      ]
    );

});
