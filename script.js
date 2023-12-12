var randomDicenumber1= Math.floor(Math.random()*6 + 1);
var diceImage= "./images/dice" + randomDicenumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceImage);

var randomDicenumber2= Math.floor(Math.random()*6 + 1);
var diceImage= "./images/dice" + randomDicenumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceImage);

if(randomDicenumber1<randomDicenumber2)
{
    document.querySelector("h1").innerHTML= "Player 2 wins";
} else if(randomDicenumber1>randomDicenumber2) 
{
    document.querySelector("h1").innerHTML= "Player 1 wins";
} else if(randomDicenumber1 === randomDicenumber2)
{
    document.querySelector("h1").innerHTML= "It's Draw";
}