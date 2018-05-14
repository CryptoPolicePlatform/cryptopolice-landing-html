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

    if ( ! dont_miss_modal) return;

    var subscribe = $('#subscribe_modal').remodal();
    var privateSale = $('#join_private_sale').remodal();
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

    $(document).on('opened closed', '#join_private_sale', function () {
        modalState = privateSale.getState();

        exitInit(modalState);
    });


    exitInit();
    function exitInit(state) {
        console.log(state);

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
