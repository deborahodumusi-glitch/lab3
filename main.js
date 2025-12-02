"use strict" // Step 4a

// A function to handle the entire conversion process when the button is clicked
function convertTemperature() {
    // Step 4b: Get Fahrenheit input value. The unary plus (+) ensures it is treated as a number.
    let fahrenheit = +document.getElementById("inputF").value;

    // Step 18: Get the user's conversion choice from the select menu
    let conversionType = document.getElementById("conversionChoice").value;

    // --- Temperature Calculations ---
    // Note: The conversion must happen *after* the button is clicked to get the new value.
    let celsius = (fahrenheit - 32) * (5 / 9);

    // Step 8 (Bug Fix): The unary plus (+) ensures the celsius variable (a number) 
    // is added to the number 273.15, avoiding "string concatenation" which was the bug.
    let kelvin = celsius + 273.15; 
    
    // --- Output to Web Page (Step 10: console.log() replaced with output()) ---

    // Clear previous output so new results don't stack up indefinitely
    document.getElementById("output").textContent = "";

    // The Fahrenheit temperature is always shown (Step 20 requirement)
    // Step 8 (String Fix): Clarified that this is the user's original input.
    output(`Original Temperature (Fahrenheit): ${fahrenheit}°F`);

    /* ##################################################
       STEP 19 & 22: CONDITIONAL LOGIC (if/else version)
       The if/else is chosen as the final logic because the two options (c or k)
       are mutually exclusive.
    ################################################## */

    if (conversionType === "c") {
        output(`Conversion Result (Celsius): ${celsius.toFixed(2)}°C`); // Challenge #2 (Optional) included
    } else if (conversionType === "k") {
        output(`Conversion Result (Kelvin): ${kelvin.toFixed(2)}K`); // Challenge #2 (Optional) included
    }

    /*
    // STEP 21: The two 'if' statements (commented out)
    
    if (conversionType === "c") {
        output(`Conversion Result (Celsius): ${celsius.toFixed(2)}°C`);
    }
    
    if (conversionType === "k") {
        output(`Conversion Result (Kelvin): ${kelvin.toFixed(2)}K`);
    }
    */
    
    // Step 24: Explanation of preference
    /*
    I prefer the if/else structure over the two independent 'if' statements.
    
    Reasoning: Since the user can only select 'c' OR 'k', these two options are 
    mutually exclusive. The if/else structure is more efficient because once the
    program finds the first condition (conversionType === "c") is true, it skips
    testing the second condition entirely. The two 'if' structure always tests 
    both conditions, which is unnecessary work given the user's choice is a 
    binary decision. The if/else structure makes the code's intent clearer for 
    other programmers as well.
    */
}

// Step 4c: Add the event listener to the submit button
document.getElementById("submit")
    .addEventListener("click", convertTemperature);
    // Note: The conversion logic is now inside the 'convertTemperature' function, 
    // which is the handler for the click event.

// Step 4d: Closing punctuation for addEventListener (already included in the function structure)
// }); // Not needed here as the function is defined outside and passed as a reference.