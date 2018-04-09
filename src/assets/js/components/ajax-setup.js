$.ajaxSetup({
    contentType: "application/json",
    error: function ($xhr) {
        if ($xhr.responseJSON) {
            var messages = [];
            
            var error = $xhr.responseJSON.error;

            if (error && error.message)
            {
                messages.push(error.message);

                if (error.details instanceof Array)
                {
                    error.details.forEach(function (detail) {
                        if (detail.message) {
                            messages.push(detail.message);
                        }
                    });
                }

                showAppAlert('error', messages);
                return;
            }
        }

        showAppAlert('error', ['Sorry, something went wrong. Please try again later.']);
    }
});