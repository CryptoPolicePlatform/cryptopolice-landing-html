$(function () {
    $('form[data-js-token-sale-whitelist]').submit(function (event) {
        event.preventDefault();
        var $form = $(this);
        $.post({
            url: appApiHost("/Crowdsale/Participant/Signup/Whitelisting", "v1.0"),
            data: appFormHelpers.getJson($form, ['Email']),
            headers: appFormHelpers.captchaHeader($form)
        }).done(function () {
            showAppAlert('success', ['You will receive confirmation e-mail shortly']);
            $('#tokensale_whitelist_modal').remodal().close();
            $form[0].reset();
        })
    });
});