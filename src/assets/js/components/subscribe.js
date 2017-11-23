$(function () {
    "use strict";

    $('form[data-js-subscribe]').submit(function (event) {
        event.preventDefault();
        var $form = $(this);
        $.post(appApiHost + "/api/subscribe",
            appFormHelpers.getJson($form, ['Name', 'Email'])
        ).done(function () {
            showAppAlert('success', ['Please check you e-mail for confirmation link']);
            $('#subscribe_modal').remodal().close();
            $form[0].reset();
        })
    });

    var results = new RegExp('[\?&]subscribe=([^&#]*)').exec(window.location);
    if (results && results[1]) {
        $.post(appApiHost + "/api/subscribe/confirm/" + results[1])
            .done(function () {
                showAppAlert('success', ['Thank you, you are now subscribed.']);
            })
    }
})