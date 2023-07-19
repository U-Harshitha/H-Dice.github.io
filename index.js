var roll = Math.floor(Math.random() * 6) + 1;
var result = "images/dice" + roll + ".png";
var roll2 = Math.floor(Math.random() * 6) + 1;
var result2 = "images/dice" + roll2 + ".png";
var i1 = document.querySelectorAll("img")[0];
var i2 = document.querySelectorAll("img")[1];
i1.setAttribute("src",result);
i2.setAttribute("src",result2);

if (roll > roll2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(roll < roll2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";    
}
else{
    document.querySelector("h1").innerHTML = "Tie !";
}