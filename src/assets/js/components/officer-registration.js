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
})