$(function() {

    "use strict";

    var date = new Date(2018, 7, 29); // YYYY, 0-11 - month, 1-31 day

    $('#timer').countdown({
        until: date,
        timezone: +2,
        compact: true,
        layout: '<div class="timer__item  timer__item--days"><div class="timer__inner">{dn}</div></div>' +
                '<div class="timer__item  timer__item--hours"><div class="timer__inner">{hnn}</div></div>' +
                '<div class="timer__item  timer__item--min"><div class="timer__inner">{mnn}</div></div>' +
                '<div class="timer__item  timer__item--sec"><div class="timer__inner">{snn}</div></div>'
    });

});
