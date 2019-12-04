var buttonvalue = [0, 0, 0];

function button1(){
    document.getElementById("container").style.backgroundImage = "url(images/bg1.jpg)";
    document.getElementById("img0").src = "images/1.jpg";
    document.getElementById("button1").style.backgroundColor = "red";
    document.getElementById("button2").style.backgroundColor = "lightgreen";
    document.getElementById("button3").style.backgroundColor = "lightgreen";
    document.getElementById("button1").disabled = true; 
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    buttonvalue[0] ++;
    document.getElementById("button1").innerHTML = buttonvalue[0];
}

function button2(){
    document.getElementById("container").style.backgroundImage = "url(images/bg2.jpg)";
    document.getElementById("img0").src = "images/2.jpg";
    document.getElementById("button2").style.backgroundColor = "red";
    document.getElementById("button1").style.backgroundColor = "lightgreen";
    document.getElementById("button3").style.backgroundColor = "lightgreen";
    document.getElementById("button2").disabled = true; 
    document.getElementById("button1").disabled = false;
    document.getElementById("button3").disabled = false;
    buttonvalue[1] ++;
    document.getElementById("button2").innerHTML = buttonvalue[1];
}

function button3(){
    document.getElementById("container").style.backgroundImage = "url(images/bg3.jpg)";
    document.getElementById("img0").src = "images/3.jpg";
    document.getElementById("button3").style.backgroundColor = "red";
    document.getElementById("button1").style.backgroundColor = "lightgreen";
    document.getElementById("button2").style.backgroundColor = "lightgreen";
    document.getElementById("button3").disabled = true; 
    document.getElementById("button2").disabled = false;
    document.getElementById("button1").disabled = false;
    buttonvalue[2] ++;
    document.getElementById("button3").innerHTML = buttonvalue[2];
}

// var buttonvalues = {button1:0, button2:0, button3:0};
// var lastused = 1;

// function button(id){
//     document.getElementById("button"+ lastused).style.backgroundColor = "lightgreen";
//     document.getElementById("button"+ lastused).disabled = false;
//     document.getElementById("button"+ id).style.backgroundColor = "red";
//     document.getElementById("button" + id).disabled = true;
//     document.getElementById("img0").src = "images/"+ id + ".jpg";
//     document.getElementById("container").style.backgroundImage = "url(images/bg" + id + ".jpg)";
//     buttonvalues["button" + id]++;
//     lastused = id;
// }