	
	//variables which will be used:
	var PlayerGuess = 0; //this will be the player's guessed amount
	var gameWins = 0; //total wins
	var gamelosses = 0; //total losses
	var targetScore = 0; //this will be the aimed number

	//jQuery Text will go in here.
	$().ready(function() {
		
		//Before the game function control goes here.
		randomNumberGen();
		genCrystalNumbers();

		//In game function here - GAme in play
		$(".cCryGem1").click(function(){
			var guessValue = $(this).attr("value");
			PlayerGuess = parseInt(guessValue) + PlayerGuess;
			$("#d5LblGuessedTotal").text(PlayerGuess);
			winLossControl();
		});
	});


	//Generate random a random number 18-120 & populate the taret score
	function randomNumberGen(){
		targetScore = Math.floor(Math.random() * 102) + 18; //set the range
		//create a random number generator and fill the information in from there.
			$("#d3LblTargetScore").text(targetScore); //random number pushed in.
		}

		function genCrystalNumbers(){
		//the opening jQuery will run through each class item of cCryGem1..
		$(".cCryGem1").each(function(){
			var ranNumber = Math.floor(Math.random() * 12) + 1;
			$(this).attr("value", ranNumber); //adjust image value to the random number.
		});
	}

	function winLossControl(){
		//This handles checking if the game would be over or not.
		//if over - then handle the game over
		if (PlayerGuess > targetScore) {
			//update the player on how they did and adjust their score.
			alert("You've exceeded the number! Try again!!");
			gamelosses += 1;
			$("#d31LossScore").text(gamelosses);
			//reload the screen for the new game.
			randomNumberGen();
			genCrystalNumbers();
			//reset the player information to the base
			PlayerGuess = 0;
			$("#d5LblGuessedTotal").text(PlayerGuess);
		}
		//if spot on then handle game won
		if (PlayerGuess === targetScore) {
			//when the player wins runs through the same information.
			alert("You win!!");
			playAudio();
			gameWins += 1;
			$("#d31WinsScore").text(gameWins);
			//reload the screen for the new game.
			randomNumberGen();
			genCrystalNumbers();
			//reset the player information to the base
			PlayerGuess = 0;
			$("#d5LblGuessedTotal").text(PlayerGuess);

		}
	}

	var result = $('#result');

	result.hide().html('<%= j @result %>').fadeIn(250);
	playAudio(result);

	function playAudio(result){
		if (result.html() === "Yes"){

			$('#yes-audio').trigger('play');
		}
		
	}