//= ../../../../bower_components/typed.js/dist/typed.min.js

$(function() {

    "use strict";

    /**
    * Typed
    * Docs: https://github.com/mattboldt/typed.js
    */

    var typedEl = $("[data-typed]");

    if(typedEl.length > 0) {
        typedEl.typed({
            strings: ["<span>Hello World!</span>", "<h1>Hello World!</h1>"],
            typeSpeed: 0,
            contentType: "text" // "html" or "text"
        });
    }

});
