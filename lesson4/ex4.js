const add = document.querySelector("#add");
const convert = document.querySelector("#convert");
const container = document.querySelector("#input-container");
const section2 = document.querySelector(".section-2");

// Adds new input on every click 
add.addEventListener("click", function() {
    const input = document.createElement("input");
    container.appendChild(input);
});

// Creates array of input values, then stringifies the array and adds as a span  
// with text in section-2, on every click
convert.addEventListener("click", function() {
    let values = [];
    const inputs = document.querySelectorAll("input");
    inputs.forEach(element => values.push(element.value));    // Array of input values
    const valuesToString = JSON.stringify(values);    // Stringified version
    const valueContainer = document.createElement("span");    // New empty span to add string text
    valueContainer.innerHTML = valuesToString;    // Sets span text to string of values
    section2.appendChild(valueContainer);         // Adds span
});
