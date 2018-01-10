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

window.appCaptchaUserResponseTokenCallback = function (userResponseToken) {
    appPendingRecaptchaRequestCallback(userResponseToken);
}

window.appPendingRecaptchaRequestCallback = null;

window.appGrecaptchaRequest = function (callback) {
    if (appPendingRecaptchaRequestCallback === null) {
        grecaptcha.execute();
        appPendingRecaptchaRequestCallback = function (userResponseToken) {
            grecaptcha.reset();
            appPendingRecaptchaRequestCallback = null;
            callback(userResponseToken);
        }
    }
}