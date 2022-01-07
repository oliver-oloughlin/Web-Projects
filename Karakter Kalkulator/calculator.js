"use strict";

let grades = [];
const gradeScoreMap = new Map([["A", 5],["B", 4],["C", 3],["D", 2],["E", 1],["F", 0]]);
const p = document.getElementById("average");
const listContainer = document.getElementById("list-container");
let ul = document.createElement("ul");
div.appendChild(ul);

function add() {
    const grade = document.getElementById("grade").value.toUpperCase();
    const points = parseInt(document.getElementById("points").value);

    const gradeFormat = new RegExp("^([A-F]{1,1})$");
    const pointsFormat = new RegExp("^([0-9]{1,3})$");

    if (grade && points && gradeFormat.test(grade) && pointsFormat.test(points) && points >= 5 && points <= 360 && points % 5 == 0) {
        grades.push([grade, points]);
        calculate();
        updateList(grade, points);   
    }
}

function calculate() {
    let gradeSum = 0;
    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i][0];
        const points = grades[i][1];
        sum += points;
        const gradeScore = gradeScoreMap.get(grade);
        gradeSum += gradeScore * points;
    }

    let gradeAverage = (gradeSum / sum).toString();
    if (gradeAverage.length > 4) gradeAverage = gradeAverage.substring(0,4);
    p.innerText = "Grade average: " + gradeAverage;
}

function updateList(grade, points) {
    const li = document.createElement("li");
    li.innerText = grade + " - " + points;
    ul.appendChild(li);
}

function reset() {
    grades = [];
    p.innerText = "";
    ul.remove();
    ul = document.createElement("ul");
    div.appendChild(ul);
}