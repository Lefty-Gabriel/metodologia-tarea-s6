'use strict'
//Primer ejercicio
function filterandround(values) {
    let result = [];
    for (let valor of values) {
        if (valor > 10.00) {
            result.push(valor.toFixed(2));
        }
    }
    return result;
}

let nums = [13.676767, 3.123432, 5.34543543, 10.3452345]
let filtedvalues = filterandround(values);
console.log(filtedvalues)

//Segundo ejercicio
function filterSubjectsByLevel(subjectsArray, level) {
    let filteredSubjects = [];

    switch (level) {
        case 1:
            filteredSubjects = subjectsArray.filter(subject => subject.credits === 1);
            break;
        case 2:
            filteredSubjects = subjectsArray.filter(subject => subject.credits === 2);
            break;
        case 3:
            filteredSubjects = subjectsArray.filter(subject => subject.credits === 3);
            break;
        default:
            filteredSubjects = [];
            break;
    }

    return filteredSubjects;
}

let firstlevel = [
    { subject: "Matematicas", credits: 3 },
    { subject: "Metodologias", credits: 3 },
    { subject: "Base de datos", credits: 2 },
    { subject: "Tics", credits: 2 },
    { subject: "Interfaces", credits: 2 },
    { subject: "Piensa", credits: 1 },
];

let secondlevel = [
    { subject: "sistema digital", credits: 3 },
    { subject: "sistema de informacion", credits: 3 },
    { subject: "programacion a objetos", credits: 2 },
    { subject: "procesos contables", credits: 2 },
    { subject: "gestion de base de datos", credits: 2 },
    { subject: "Piensa", credits: 1 },
];

let thirdlevel = [
    { subject: "app para moviles", credits: 3 },
    { subject: "procesos estocasticos", credits: 3 },
    { subject: "herramientas informaticas", credits: 2 },
    { subject: "aplicaciones autonomas", credits: 2 },
    { subject: "software aplicativo", credits: 2 },
    { subject: "Piensa", credits: 1 },
];

console.log("level 1:");
console.log("First Level:");
console.log(filterSubjectsByLevel(firstlevel, 1));
console.log("Second Level:");
console.log(filterSubjectsByLevel(secondlevel, 1));
console.log("Third Level:");
console.log(filterSubjectsByLevel(thirdlevel, 1));

console.log("level 2:");
console.log("First Level:");
console.log(filterSubjectsByLevel(firstlevel, 2));
console.log("Second Level:");
console.log(filterSubjectsByLevel(secondlevel, 2));
console.log("Third Level:");
console.log(filterSubjectsByLevel(thirdlevel, 2));

console.log("level 3:");
console.log("First Level:");
console.log(filterSubjectsByLevel(firstlevel, 3));
console.log("Second Level:");
console.log(filterSubjectsByLevel(secondlevel, 3));
console.log("Third Level:");
console.log(filterSubjectsByLevel(thirdlevel, 3));


//tercer ejercicio
function calcaverage(grades) {
    if (grades.length === 0) {
        return 0;
    }
    let suma = grades.reduce((acumulador, grade) => acumulador + grade, 0);
    let averagee = suma / grades.length;
    return Math.floor(averagee);
}

let grades = [95, 90, 98, 92, 68];
let fullaverage = calcaverage(grades);
console.log(`final average: ${fullaverage}`);
