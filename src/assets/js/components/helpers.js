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
    },
    captchaHeader: function($form) {
        return {
            'X-G-Recaptcha-Response': $form.find('[name=g-recaptcha-response]').val()
        }
    }
}