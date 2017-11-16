$(function() {

    "use strict";

    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Hide";

    $('[data-dots]').each(function() {
        var content = $(this).html(),
            chars = $(this).data('chars');

        if(content.length > chars) {

            var c = content.substr(0, chars);
            var h = content.substr(chars, content.length - chars);

            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function() {
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

});
