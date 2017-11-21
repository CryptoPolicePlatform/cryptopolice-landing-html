$.ajaxSetup({
    contentType: "application/json",
    error: function ($xhr) {
        if ($xhr.status === 400 && $xhr.responseJSON) {
            var messages = [];

            for (var field in $xhr.responseJSON) {
                $xhr.responseJSON[field].forEach(function (msg) {
                    msg = msg.trim();
                    if (msg) {
                        messages.push(msg);
                    }
                })
            }

            if (messages.length) {
                showAppAlert('error', messages);
                return;
            }
        }

        showAppAlert('error', ['Sorry, something went wrong. Please try again later.']);
    }
});