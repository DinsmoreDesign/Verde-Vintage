/*global $ */

/* Fade In Header h1 on Container Mouse-Over */

$(document).ready(function () {
    "use strict";
    $(".callout h1").fadeTo("fast", 0.3);
    $(".callout").mouseenter(function () {
        $(".callout h1").fadeTo("slow", 1);
    });
    $(".callout").mouseleave(function () {
        $(".callout h1").fadeTo("slow", 0.3);
    });
});

/* Fade In Bottom Logo on Container Mouse-Over */

$(document).ready(function () {
    "use strict";
    $(".whitebox #bottom-logo").fadeTo("slow", 0.1);
    $(".whitebox").mouseenter(function () {
        $(".whitebox #bottom-logo").fadeTo("slow", 1);
    });
    $(".whitebox").mouseleave(function () {
        $(".whitebox #bottom-logo").fadeTo("slow", 0.1);
    });
});