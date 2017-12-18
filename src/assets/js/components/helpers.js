window.appApiHost = function (uri, v) {
    return "https://api.cryptopolice.com/api" + (v ? "/" + v : "") + uri 
}

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