$(function () {
    "use strict";

    $('form[data-ajax-officer-registration]').submit(function (event) {
        event.preventDefault();
        var $form = $(this);
        appGrecaptchaRequest(function (userResponseToken) {
            $.post({
                url: appApiHost("/officer-signup", "v2"),
                data: appFormHelpers.getJson($form, ['Name', 
                    'Nickname',
                    'Email',
                    'Country',
                    'YearsCryptoWorldExperience',
                    'BlockchainKnowledgePercentage',
                    'TradingKnowledgePercentage']),
                headers: {
                    'X-G-Recaptcha-Response': userResponseToken
                }
            }).done(function () {
                showAppAlert('success', ['Please check you e-mail for more details']);
                $form[0].reset();
            })
        })
    })

    var results = new RegExp('[\?&]officer_signup=([^&#]*)').exec(window.location);
    if (results && results[1]) {
        $.post(appApiHost("/officer-signup/confirm/" + results[1]))
            .done(function () {
                showAppAlert('success', ['Thank you, registration confirmed.']);
            });
        history.replaceState(null, null, '/')
    }
})