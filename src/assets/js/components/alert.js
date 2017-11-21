$(function() {

    "use strict";

    var alertTpl = $(window['alert-tpl']).html().trim();
    
    window.showAppAlert = function(type, messagesArray) {
        var $alert = $(alertTpl);
        $alert.addClass('alert--' + type);
        var $container = $alert.find('.alert__inner');
        messagesArray.forEach(function (msg) {
            $container.append('<p>' + msg + '</p>')
        });
        $alert.appendTo(document.body);
        $alert.find(".alert__close").on("click", function(e) {
            e.preventDefault();
    
            var $this = $(this),
                alert = $this.parents(".alert");
    
            /**
            * Remove alert from DOM
            */
            alert.fadeOut("fast", function(){
               $(this).remove();
            });
        });
    }
});
