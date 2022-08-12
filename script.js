// This function displays the values
function display(value) {
    var screen = document.getElementById("screen");
    screen.value += value;
}

// This function clears the screen
function clearScreen() {
     document.getElementById("screen").value = " ";
}

// This function evaluates the expression and returns the result
function calculate() {
    var part = document.getElementById("screen").value;
    var answer = eval(part);
    document.getElementById("screen").value = answer;
}