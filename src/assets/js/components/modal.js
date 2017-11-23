//= ../../../../bower_components/remodal/dist/remodal.js

$(function() {

    "use strict";

    /**
    * Remodal
    * Docs: https://github.com/VodkaBears/Remodal
    */

    var dont_miss_modal = $('#dont_miss_modal').remodal();

    if ( ! dont_miss_modal) return;

    var subscribe = $('#subscribe_modal').remodal();
    var modalState = "closed";


    $("[data-toggle=remodal]").on("click", function(e) {
        e.preventDefault();

        var modal_id = $(this).data("target");

        var modal = $(modal_id).remodal({
            hashTracking: false
        });

        modal.open();
    });


    $(document).on('opened closed', '#subscribe_modal', function () {
        modalState = subscribe.getState();

        exitInit(modalState);
    });


    exitInit();
    function exitInit(state) {
        glio.init(
          [ 'top', function () {
              if(state != "opened" && ! dont_miss_modal.data('preventDisplay')) {
                dont_miss_modal.open();
              }
            }
          ]
        );
    }



});
