$(function () {
    "use strict";

    $('form[data-ajax-seminar-signup]').submit(function (event) {
        event.preventDefault();
        var $form = $(this);
        $.post({
            url: appApiHost("/Seminar/Signup", "v1.0"),
            data: appFormHelpers.getJson($form, ['FirstName', 'LastName', 'Email', 'PhoneNumber', 'SkillGrade']),
            headers: appFormHelpers.captchaHeader($form)
        }).done(function () {
            showAppAlert('success', ['Uz norādīto e-pastu tika nostūtītas tālākas instrukcijas dalībai.']);
            $form[0].reset();
        })
    });

    var results = new RegExp('[\?&]confirm_seminar_signup=([^&#]*)').exec(window.location);
    if (results && results[1]) {
        $.get(appApiHost("/Seminar/Signup/Confirm/" + results[1], "v1.0"))
            .done(function () {
                showAppAlert('success', ['Paldies par pieteikšanos!']);
            });
        history.replaceState(null, null, '/')
    }
})