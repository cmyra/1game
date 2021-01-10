const myrGame = () => {
	let playerScore = 0;
	let	computerScore = 0;
	
	const startGame = () =>  {
		const startButton = document.querySelector(".start button");
		const startScreen = document.querySelector(".start");	
		const pick = document.querySelector(".pick");
		
			startButton.addEventListener("click", () => {
			startScreen.classList.add("fadeOut");
			pick.classList.add("fadeIn");	
		} );
		};

	const challenge = () => {
	const choise = document.querySelectorAll (".choice button");
	const player_Hand = document.querySelector(".playerHand");
	const computer_Hand = document.querySelector(".computerHand");

//player select	
	choise.forEach(select => {
		select.addEventListener("click", function () {
		const playerSelect = this.textContent;
		console.log(playerSelect);

//computer select
		const computerChoice = ["paper", "rock", "scissor"];
		computerNum = Math.floor(Math.random() * 3);
		const computerSelect = computerChoice[computerNum];
		console.log(computerSelect);

//execute winner
		bothHand(playerSelect, computerSelect);

//images update
		player_Hand.src = `${this.textContent}.png`;
		computer_Hand.src = `${computerSelect}.png`;
		});
	});

	const updateScore = () => {
		const player = document.querySelector('.player p');
		const computer = document.querySelector('.computer p');
		player.textContent = playerScore;
		computer.textContent = computerScore;
	}
	
	const bothHand = (playerSelect, computerSelect) => {

//winner text update
		const won = document.querySelector('.winner');
		
		if 	(playerSelect === 'Paper'){
			if (computerSelect === 'paper'){
			won.textContent = 'It is a tie';
			return;
			}
		}
		if (playerSelect === 'Rock'){
			if (computerSelect === 'rock'){
			won.textContent = 'It is a tie';
			return;
			}
		}
		if (playerSelect === 'Scissor'){
			if (computerSelect === 'scissor'){
			won.textContent = 'It is a tie';
			return;
			}
		}
		if (playerSelect === 'Paper'){
			if (computerSelect === 'rock'){
			won.textContent = 'Player Wins';
			playerScore++;
			updateScore();
			return;
			}
		}
		if 	(playerSelect === 'Paper'){
			if (computerSelect === 'scissor'){
			won.textContent = 'Computer Wins';
			computerScore++;
			updateScore();
			return;
			}
		}
		if 	(playerSelect === 'Rock'){
			if (computerSelect === 'paper'){
			won.textContent = 'Computer Wins';
			computerScore++;
			updateScore();
			return;
			}
		}
		if 	(playerSelect === 'Rock'){
			if (computerSelect === 'scissor'){
			won.textContent = 'Player Wins';
			playerScore++;
			updateScore();
			return;
			}
		}
		if 	(playerSelect === 'Scissor'){
			if (computerSelect === 'paper'){
			won.textContent = 'Player Wins';
			playerScore++;
			updateScore();
			return;
			}
		}
		if 	(playerSelect === 'Scissor'){
			if (computerSelect === 'rock'){
			won.textContent = 'Computer Wins';
			computerScore++;
			updateScore();
			return;
			}
		}

	}
};

 //execute inner function
startGame();
challenge();


};
//execute the game
myrGame();
