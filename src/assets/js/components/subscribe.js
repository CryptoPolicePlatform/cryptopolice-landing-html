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
    })
})