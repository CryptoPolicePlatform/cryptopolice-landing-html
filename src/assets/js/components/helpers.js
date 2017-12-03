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