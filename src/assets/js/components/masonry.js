//= ../../../../bower_components/masonry/dist/masonry.pkgd.js

$(function() {

    "use strict";

    /**
    * Masonry
    * Docs: https://github.com/desandro/masonry
    */

    var masonryGrid = $("[data-masonry]");

    if(masonryGrid.length > 0) {
        masonryGrid.masonry({
            containerStyle: null,
            itemSelector: ".masonry__item",
            columnWidth: 200,
            gutter: 20
        });
    }

});
