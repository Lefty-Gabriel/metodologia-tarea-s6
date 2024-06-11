'use strict'

function showelements(list) {
    for (let i = 0; i < list.length; i++) {
        console.log("Position " + i + ": " + list[i]);
    }
}

let nombres = ["Paul", "Gabriel", "Josue", "Miguel"];
showelements(nombres);


let addelements = lista => lista.reduce((suma, element) => suma + element, 0);

let numbers = [1, 2, 3, 4, 5];
let result = addelements(numbers);
console.log("the result is: " + result);


function mmultipliedby3(multiply) {
    for (let i = 0; i < multiply.length; i++) {
        alert(multiply[i] * 3);
    }
}

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 90];
mmultipliedby3(digits);
