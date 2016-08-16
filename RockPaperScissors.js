var choice2;
var choice1;
var varChoice;
var i;
var j;
var k;
var p1=0;
var p2=0;
function choose(choice){
    varChoice = choice;
    document.getElementById("demo").innerHTML = " ";
    if (varChoice === "rock"){
		document.getElementById("rocko").style.background = 'red';
		document.getElementById("papo").style.background = 'white';
		document.getElementById("scisso").style.background = 'white';
		document.getElementById("lizo").style.background = 'white';
		document.getElementById("spoco").style.background = 'white';
	}
		else if (varChoice === "paper"){
			document.getElementById("rocko").style.background = 'white';
			document.getElementById("papo").style.background = 'red';
			document.getElementById("scisso").style.background = 'white';
			document.getElementById("lizo").style.background = 'white';
			document.getElementById("spoco").style.background = 'white';
		} 
			else if (varChoice === "scissors"){
				document.getElementById("rocko").style.background = 'white';
				document.getElementById("papo").style.background = 'white';
				document.getElementById("scisso").style.background = 'red';
				document.getElementById("lizo").style.background = 'white';
				document.getElementById("spoco").style.background = 'white';
			}
				else if (varChoice === "lizard"){
					document.getElementById("rocko").style.background = 'white';
					document.getElementById("papo").style.background = 'white';
					document.getElementById("scisso").style.background = 'white';
					document.getElementById("lizo").style.background = 'red';
					document.getElementById("spoco").style.background = 'white';
				}
					else if (varChoice === "spock"){
						document.getElementById("rocko").style.background = 'white';
						document.getElementById("papo").style.background = 'white';
						document.getElementById("scisso").style.background = 'white';
						document.getElementById("lizo").style.background = 'white';
						document.getElementById("spoco").style.background = 'red';
					}
	i=1;
}
function PlayerOneReady(click){
	if (i===1){
	    choice1 = varChoice;
	    document.getElementById("rocko").style.background = 'white';
		document.getElementById("papo").style.background = 'white';
		document.getElementById("scisso").style.background = 'white';
		document.getElementById("lizo").style.background = 'white';
		document.getElementById("spoco").style.background = 'white';
		document.getElementById("play1").style.visibility = 'hidden';
		j=2;
		i=0;
	}
}
function PlayerTwoReady(click){
	if ( i===1 ){
		choice2 = varChoice;
		document.getElementById("rocko").style.background = 'white';
		document.getElementById("papo").style.background = 'white';
		document.getElementById("scisso").style.background = 'white';
		document.getElementById("lizo").style.background = 'white';
		document.getElementById("spoco").style.background = 'white';
		document.getElementById("play2").style.visibility = 'hidden';
		k=2;
		i=0;
	}
}

function winner(clcik){
	if ( (j===2) && (k===2) ){
/*		switch (choice1 + choice2){
			case "paper" + "rock":
			case "rock" + "scissors":
			case "scissors" + "paper":
				document.getElementById("demo").innerHTML =  "player 1 wins";
				document.getElementById("playerOneScoreH6").innerHTML = ++p1;
				break;
			case "paper" + "scissors":
			case "rock" + "paper":
			case "scissors" + "rock":
				document.getElementById("demo").innerHTML =  "player 2 wins";
				document.getElementById("playerTwoScoreH6").innerHTML = ++p2;
				break;
			default:
				document.getElementById("demo").innerHTML =  "IT'S A DRAW";
		} */
		switch (choice1 + choice2){
			case "paper" + "rock":
			case "paper" + "spock":
			case "rock" + "scissors":
			case "rock" + "lizard":
			case "scissors" + "paper":
			case "scissors" + "lizard":
			case "lizard" + "spock":
			case "lizard" + "paper":
			case "spock" + "scissors":
			case "spock" + "rock":
				document.getElementById("demo").innerHTML =  "player 1 wins";
				document.getElementById("playerOneScoreH6").innerHTML = ++p1;
				break;
			case "paper" + "scissors":
			case "paper" + "lizard":
			case "rock" + "paper":
			case "rock" + "spock":
			case "scissors" + "rock":
			case "scissors" + "spock":
			case "lizard" + "rock":
			case "lizard" + "scissors":
			case "spock" + "lizard":
			case "spock" + "paper":
				document.getElementById("demo").innerHTML =  "player 2 wins";
				document.getElementById("playerTwoScoreH6").innerHTML = ++p2;
				break;
			default:
				document.getElementById("demo").innerHTML =  "IT'S A DRAW";
		}

		document.getElementById("play1").style.visibility = 'visible';
		document.getElementById("play2").style.visibility = 'visible';
		i=0;
		j=0;
		k=0;
	}
	else{
		document.getElementById("demo").innerHTML =  "Both Players must Choose and Lock to continue game!!!";
		i=0;
	}
}

