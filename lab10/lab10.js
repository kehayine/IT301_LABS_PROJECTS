
var result;
var message = "Enter the total restaurant bill amount: ";

do {
    result = prompt(message);

    if (result == null || result == "" || result == 0) {
        message = "Please enter a valid bill amount greater than zero.";
    }
    else if (result < 0) {
        message = "Negative amounts are not allowed. Please enter a positive bill amount.";
    }
    else if (isNaN(result)) {
        message = "Invalid input. Please enter a valid number.";
    }

} while (result == null || result == "" || isNaN(result) || result <= 0);

var tip = result * 0.10;

var output = "For a bill of $" + result +
             ", the tip should be $" + tip + ".";

console.log(output);
document.write(output);
