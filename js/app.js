'use strict'

$(document).ready(function() {

    function numbClick(event) {
        var target = $(event.target).text();
        var calScreen = $("#screen");
        var oldScreen = calScreen.text();

        if (target === "C") {
            $(calScreen).text("");
        } else if (target === "=") {
            $(calScreen).text(eval(oldScreen));
        } else if (target === "x") {
            $(calScreen).text(oldScreen + "*");
        } else if (target === "÷") {
            $(calScreen).text(oldScreen + "/");
        } else {
            $(calScreen).text(oldScreen + target);
        }
    }
    // EVENT LISTENER
    $("span").on('click', numbClick);

});
