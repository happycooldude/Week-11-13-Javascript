var week = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

document.getElementById("week").innerHTML = week;

document.getElementById("werkdagen").innerHTML = week [0] + week [1] + week [2] + week [3] + week [4];

document.getElementById("weekend").innerHTML = week [5] + week [6];

omkeren();

document.getElementById("dagen omgekeerd").innerHTML = week;

omkeren();

document.getElementById("werkdagenomgekeerd").innerHTML = week [4] + week [3] + week [2] + week [1] + week [0];

document.getElementById("weekendomgekeerd").innerHTML = week [5] + week [6];

function omkeren(){
    week.reverse();
}

// var userInput, namen = [];
// while(userInput !== "n"){
//     namen.push(userInput = prompt("Welke naam wilt u toevoegen?"));
//     userInput = prompt("Wilt u nog een naam aan de lijst toevoegen? y/n");
// }

// document.getElementById("namen").innerHTML = namen;

// function omkeernamen(){
//     namen.reverse();
// }

// omkeernamen();
// document.getElementById("namen omgekeerd").innerHTML = namen;
// omkeernamen();

var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

// optellen(arrayEen, arraytwee);
for(var i = 0; i < arrayEen.length; i++){
    document.getElementById("optellen").innerHTML += arrayEen[i] + ' + ' + arrayTwee[i] + ' = ' + (arrayEen[i] + arrayTwee[i]) +  '<br/>';
}

// aftrekken(arrayTwee, arrayEen);
for(var i = 0; i < arrayEen.length; i++){
    document.getElementById("aftrekken").innerHTML += arrayTwee[i] + " - " + arrayEen[i] + " = " + (arrayTwee[i] - arrayEen[i]) + "<br/>";
}

// vermenigvuldigen(arrayEen, arrayTwee);
for(var i = 0; i < arrayEen.length; i++){
    document.getElementById("vermedigvuldigen").innerHTML += arrayEen[i] + " * " + arrayTwee[i] + " = " + (arrayEen[i] * arrayTwee[i] + "<br/>");
}

// delen(arrayTwee, arrayEen);
for(var i = 0; i < arrayEen.length; i++){
    document.getElementById("delen").innerHTML += arrayTwee[i] + " / " + arrayEen[i] + " = " + (arrayTwee[i] / arrayEen[i] + "<br/>");
}

var arraytafels = [2,4,6,8];

//de tafels van 2, 4, 6, 8,
for(var i = 0; i <arrayEen.length; i++){
    document.getElementById("2").innerHTML += arrayEen[i] + " * " + arraytafels[0] + " = " + (arrayEen[i] * arraytafels[0] + "<br/>");
}

for(var i = 0; i <arrayEen.length; i++){
    document.getElementById("4").innerHTML += arrayEen[i] + " * " + arraytafels[1] + " = " + (arrayEen[i] * arraytafels[1] + "<br/>");
}

for(var i = 0; i <arrayEen.length; i++){
    document.getElementById("6").innerHTML += arrayEen[i] + " * " + arraytafels[2] + " = " + (arrayEen[i] * arraytafels[2] + "<br/>");
}

for(var i = 0; i <arrayEen.length; i++){
    document.getElementById("8").innerHTML += arrayEen[i] + " * " + arraytafels[3] + " = " + (arrayEen[i] * arraytafels[3] + "<br/>");
}

var inputgetal, getallen = [];

inputgetal = prompt("voer een getallen in");
for(var i = 1; i <=inputgetal; i++){
    getallen.push(i);
    document.getElementById("piramideoplopend").innerHTML += `${getallen} <br/>`;
}

document.getElementById("arrayop").innerHTML +=  `array : ${getallen}`;
document.getElementById("array").innerHTML +=  `array : ${getallen}`;

for(var i = inputgetal; i >= 1; i--){
    document.getElementById("piramideaflopend").innerHTML += `${getallen} <br/>`;
    getallen.pop();
}