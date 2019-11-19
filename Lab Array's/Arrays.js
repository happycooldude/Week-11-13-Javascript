var week = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

document.getElementById("week").innerHTML = week;
document.getElementById("werkdagen").innerHTML = week [0] + week [1] + week [2] + week [3] + week [4];
document.getElementById("weekend").innerHTML = week [5] + week [6];
omkeren();
document.getElementById("omgekeerd").innerHTML = week;
omkeren();
document.getElementById("werkdagenomgekeerd").innerHTML = week [4] + week [3] + week [2] + week [1] + week [0];
document.getElementById("weekendomgekeerd").innerHTML = week [5] + week [6];

function omkeren(){
    week.reverse();
}

var namen = [];
while(userInput != stop){
    var userInput = prompt("Welke naam wilt u toevoegen?");
    namen.push(userinput);
}
document.getElementById("namen").innerHTML = namen;
