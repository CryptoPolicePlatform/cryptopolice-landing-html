$(function () {
    "use strict";

    $('form[data-ajax-officer-registration]').submit(function (event) {
        event.preventDefault();
        var form = $(this);
        $.post("https://api.cryptopolice.io/api/officer-signup", {
            Name: form.find('[name=Name]').val(),
            Nickame: form.find('[name=Nickame]').val(),
            Email: form.find('[name=Email]').val(),
            Country: form.find('[name=Country]').val(),
            YearsCryptoWorldExperience: form.find('[name=YearsCryptoWorldExperience]').val(),
            BlockchainKnowledgePercentage: form.find('[name=BlockchainKnowledgePercentage]').val(),
            TradingKnowledgePercentage: form.find('[name=TradingKnowledgePercentage]').val(),
        }).done(function () {

        }).fail(function () {
            
        })
    })
})