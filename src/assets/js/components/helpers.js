window.appApiHost = function (uri, v) {
    return "https://api.cryptopolice.com/api" + (v ? "/" + v : "") + uri 
};

window.appFormHelpers = {
    getJson: function ($form, options, obj) {
        if ( ! obj) {
            obj = {};
        }

        if (options instanceof Array) {
            for (var field in options) {
                var val = $form.find("[name=" + options[field] + "]").val();
                if (val) {
                    obj[options[field]] = val;
                }
            }
        } else {
            $form.find(options).find(':input').each(function () {
                var $el = $(this);
                var val = $el.val();
                var name = $el.attr("name");

                if (name && val) {
                    obj[$el.attr("name")] = val;
                }
            })
        }

        return JSON.stringify(obj);
    },
    captchaHeader: function($form) {
        return {
            'X-G-Recaptcha-Response': $form.find('[name=g-recaptcha-response]').val()
        }
    }
};

window.getUrlParameter = function (name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};