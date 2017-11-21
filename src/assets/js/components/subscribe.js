$(function () {
    "use strict";

    $('form[data-js-subscribe]').submit(function (event) {
        event.preventDefault();
        var form = $(this);
        $.post("https://api.cryptopolice.io/api/subscribe", {
            Name: form.find('[name=Name]').val(),
            Email: form.find('[name=Email]').val(),
        }).done(function () {
            showAppAlert('success', ['Please check you e-mail for confirmation link']);
            $('#subscribe_modal').remodal().close();
            form[0].reset();
        })
    })
})