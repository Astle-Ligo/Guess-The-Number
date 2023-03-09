var answer = Math.round(Math.random()*100)
console.log(answer)

var FinalMessage = document.getElementById("FinalMessage")
var message = document.createElement("p")

var Chance = document.getElementById("Chance")
var ChanceMessage = document.createElement("p")

var i=10;

    ChanceMessage.innerHTML = "You Have "+i+" Chances Left.";
    Chance.prepend(ChanceMessage)

function Check(){
    var guess = document.getElementById("NumberBox").value
    console.log(guess) 

    if(--i==0){
        window.alert("Your Chance is Over." + "\n"+"The Answer Was "+ answer)
        location.reload();
    }

    ChanceMessage.innerHTML = "You Have "+i+" Chances Left.";
    Chance.prepend(ChanceMessage)
       


    if(answer == guess){
        window.alert("Your Guess " + guess + " Matched")
        location.reload();
    }
    else if(Math.abs(guess-answer)<=5)
        message.innerHTML = "Your Guess (" + guess + ") is Very Close to (difference less than 5)"
    else if(Math.abs(guess-answer)<=10)
        message.innerHTML = "Your Guess (" + guess + ") is Too Close (difference less than 10)"
    else if(Math.abs(guess-answer)<=25)
        message.innerHTML = "Your Guess (" + guess + ") is A Bit Far (difference less than 10)"
    else
        message.innerHTML = "Your Guess (" + guess + ") is Too Far (difference greater than 25)"

    FinalMessage.prepend(message)
}

