"use strict"

document.getElementById("submit").addEventListener("click", function() {
    let fahrenheit = parseInt(document.getElementById("inputF").value);

    let celsius = ((fahrenheit - 32) * 5) / 9;
    let kelvin = ((fahrenheit + 459.67) * 5) / 9;

    // All "console.log()" calls have been changed to "output()"
    output("Original temperature in Fahrenheit: " + fahrenheit);
    output("Conversion to Celsius: " + celsius);
    output("Conversion to Kelvin: " + kelvin);
});