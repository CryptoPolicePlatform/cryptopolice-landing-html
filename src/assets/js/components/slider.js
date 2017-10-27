$(function() {

    var slider = $('#team_slider_desktop');
    var slider_items = $('#team_slider_desktop li');
    var mid = parseInt($('#team_slider_desktop li.front').attr('data-idx'));
    var slider_info = $("#slider_info");
    var slider_info_item = $(".slider__info-item");

    slider_items.on('mouseover', function (event) {
        var currentItem = $(this);
        if ( ! currentItem.hasClass('front')) {
            var old = $('#team_slider_desktop li.front');
            old.removeClass('front');
            slider_info_item.removeClass('active');

            var curIdx = parseInt(currentItem.attr('data-idx'));

            if (curIdx >= mid) {
                var newIdx = 0;
                for (var elIdx = 0; elIdx < slider_items.length; elIdx++) {
                    slider_items[elIdx].style.zIndex = newIdx;
                    if (elIdx >= curIdx) {
                        newIdx--;
                    } else {
                        newIdx++;
                    }
                }
            } else {
                var newIdx = 0;
                for (var elIdx = slider_items.length - 1; elIdx >= 0; elIdx--) {
                    slider_items[elIdx].style.zIndex = newIdx;
                    if (elIdx <= curIdx) {
                        newIdx--;
                    } else {
                        newIdx++;
                    }
                }
            }

            $(".slider__info-item[data-idx=" + curIdx + "]").addClass('active');
            currentItem.addClass('front');
        }
    });

});

