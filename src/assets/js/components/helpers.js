window.appApiHost = "https://api.cryptopolice.com"

window.appFormHelpers = {
    getJson: function ($form, fieldsArray) {
        var obj = {};

        for (var field in fieldsArray) {
            var val = $form.find("[name=" + fieldsArray[field] + "]").val();
            if (val) {
                obj[fieldsArray[field]] = val;
            }
        }

        return JSON.stringify(obj);
    }
}

window.appBindRecaptcha = function () {
    $('[data-recaptchame]').each(function () {
        var $form = $(this).parent('form');
        var widgetId = grecaptcha.render(this, {
            'sitekey' : '6LfWqzsUAAAAAGvaSVAOqhXWMYAI7QvQmx4vOr49',
            'callback' : function (userResponseToken) {
                $form.data('appRecaptcha', {
                    userResponseToken:userResponseToken
                });
                $form.submit();
                grecaptcha.reset(widgetId);
            }
        });
    })
}