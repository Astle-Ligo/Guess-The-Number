var answer = Math.round(Math.random()*100)
console.log(answer)

var FinalMessage = document.getElementById("FinalMessage")
var message = document.createElement("p")

var Chance = document.getElementById("Chance")
var ChanceMessage = document.createElement("p")

var RangeGuess = document.getElementById("RangeGuess")
var RangeGuessMessage = document.createElement("h1")

var leftbar = document.getElementById("leftbar")
var rightbar = document.getElementById("rightbar")


var leftbarMessage = document.createElement("p")
var rightbarMessage = document.createElement("p")

var LeftBar = document.getElementById("LeftBar")
var RightBar = document.getElementById("RightBar")

var Ranger = document.getElementById("Ranger")

var i=10; 

let guess = 0;

var BarWidth

    ChanceMessage.innerHTML = "You Have "+i+" Chances Left.";
    Chance.prepend(ChanceMessage)

function Check(){
    guess = document.getElementById("NumberBox").value
    console.log(guess) 

    document.getElementById("finalmessage").style.display= "block"

    RangeGuessMessage.innerHTML = guess
    RangeGuess.prepend(RangeGuessMessage)
    
    if(answer == guess){
        window.alert("Your Guess " + guess + " Matched")
        location.reload();
    }
    else if(Math.abs(guess-answer)<=3){
        message.innerHTML = "Your Guess (" + guess + ") is too Close to (difference less than or 3)"
        leftbarMessage.innerHTML = (guess - 5)
        rightbarMessage.innerHTML = (+guess + 5)
        BarWidth = 35
        LeftBar.style.justifyContent = "flex-end"
        RightBar.style.justifyContent = "flex-start"
    }
    else if(Math.abs(guess-answer)<=5){
        message.innerHTML = "Your Guess (" + guess + ") is Very Close to (difference less than or 5)"
        leftbarMessage.innerHTML = (guess - 5)
        rightbarMessage.innerHTML = (+guess + 5)
        BarWidth = 45
        LeftBar.style.justifyContent = "flex-end"
        RightBar.style.justifyContent = "flex-start"
    }
    else if(Math.abs(guess-answer)<=10){
        message.innerHTML = "Your Guess (" + guess + ") is Close (difference less than or 10)"
        leftbarMessage.innerHTML = (guess - 10)
        rightbarMessage.innerHTML = (+guess + 10) 
        BarWidth = 60
        LeftBar.style.justifyContent = "flex-end"
        RightBar.style.justifyContent = "flex-start"
    }
    else if(Math.abs(guess-answer)<=25){
        message.innerHTML = "Your Guess (" + guess + ") is A Bit Far (difference less than or 25)"
        leftbarMessage.innerHTML = (guess - 25)
        rightbarMessage.innerHTML = (+guess + 25)  
        BarWidth = 75
        LeftBar.style.justifyContent = "flex-end"
        RightBar.style.justifyContent = "flex-start"
    }
    else{
        message.innerHTML = "Your Guess (" + guess + ") is Too Far (difference greater than 25)"
        leftbarMessage.innerHTML = (guess - 25)
        rightbarMessage.innerHTML = (+guess + 25)
        BarWidth = 85
        LeftBar.style.justifyContent = "flex-start"
        RightBar.style.justifyContent = "flex-end"
        leftbar.style.justifyContent = "flex-end"
        rightbar.style.justifyContent = "flex-start"
    }

    leftbar.prepend(leftbarMessage)
    rightbar.append(rightbarMessage)

    leftbar.style.width = BarWidth+"%"
    rightbar.style.width = BarWidth+"%"

    FinalMessage.prepend(message)

    Ranger.style.display = "flex"

    if((--i==0)&&(answer!=guess)){
        window.alert("Your Chance is Over." + "\n"+"The Answer Was "+ answer)
        location.reload();
    }

    
    ChanceMessage.innerHTML = "You Have "+i+" Chances Left.";
    Chance.prepend(ChanceMessage)
}
document.body.addEventListener('keydown', function(event){
    const key = event.key;
    switch (key) {
        case "Enter":
            Check()
        break;
    }
});
