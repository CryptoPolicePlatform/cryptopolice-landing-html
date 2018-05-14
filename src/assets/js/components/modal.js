//= ../../../../bower_components/remodal/dist/remodal.js

$(function() {

    "use strict";

    /**
    * Remodal
    * Docs: https://github.com/VodkaBears/Remodal
    */

    function suppress() {
        return Cookies.get('subscribed') === '1'
    }

    var dont_miss_modal = $('#dont_miss_modal').remodal();
    var modalState = "closed";

    if ( ! dont_miss_modal) return;

    $("[data-toggle=remodal]").on("click", function(e) {
        e.preventDefault();

        var modal_id = $(this).data("target");

        var modal = $(modal_id).remodal({
            hashTracking: false
        });

        modal.open();
    });


    $(document).on('opened closed', '.remodal', function () {
        var currentModal = $(this).remodal();
        modalState = currentModal.getState();

        exitInit(modalState);
    });


    exitInit();
    function exitInit(state) {
        glio.init(
          [ 'top', function () {
              if(state != "opened" && ! suppress()) {
                dont_miss_modal.open();
              }
            }
          ]
        );
    }



});
