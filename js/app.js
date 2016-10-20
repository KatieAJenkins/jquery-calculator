'use strict'
// - Click an operand or operator button to append its corresponding text to the screen.

//   - If the screen displays the message `Error`, don't append anything.

// - Click the `clear` button to remove all the text from the screen.

// - Click the `equals` button to evaluate the arithmetic expression shown in the screen.

//   - If the expression is in format `operand(+|-|x|÷)operand`, evaluate the expression and update the screen with the result.

//   - If the expression isn't in the correct format or when attempting to divide by zero, update the screen with the message `Error`.

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
