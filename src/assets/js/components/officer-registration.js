$(function () {
    "use strict";

    $('form[data-ajax-officer-registration]').submit(function (event) {
        event.preventDefault();
        var $form = $(this);
        $.post(appApiHost + "/api/officer-signup",
            appFormHelpers.getJson($form, ['Name', 
                'Nickname',
                'Email',
                'Country',
                'YearsCryptoWorldExperience',
                'BlockchainKnowledgePercentage',
                'TradingKnowledgePercentage'])
        ).done(function () {
            showAppAlert('success', ['Please check you e-mail for more details']);
            $form[0].reset();
        })
    })

    var results = new RegExp('[\?&]officer_signup=([^&#]*)').exec(window.location);
    if (results && results[1]) {
        $.post(appApiHost + "/api/officer-signup/confirm/" + results[1])
            .done(function () {
                showAppAlert('success', ['Thank you, registration confirmed.']);
            });
        history.replaceState(null, null, '/')
    }
})