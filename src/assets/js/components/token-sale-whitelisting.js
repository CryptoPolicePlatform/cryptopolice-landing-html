$(function () {
    $('form[data-js-token-sale-whitelist]').submit(function (event) {
        event.preventDefault();
        var $form = $(this);
        $.post({
            url: appApiHost("/Crowdsale/Participant/Signup/Whitelisting", "v1.0"),
            data: appFormHelpers.getJson($form, ['Email']),
            headers: appFormHelpers.captchaHeader($form)
        }).done(function () {
            showAppAlert('success', ['Please check you e-mail for confirmation link']);
            $('#tokensale_whitelist_modal').remodal().close();
            $form[0].reset();
        })
    });
});