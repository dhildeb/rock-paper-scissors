let ties = 0
let wins = 0
let loses = 0

function play(playerchoice) {

  let computerChoice = Math.floor(Math.random() * 3) + 1

  if (playerchoice == "rock") {
    if (computerChoice == 1) {
      ties++
      window.alert("Rock vs Rock, You Tied")
    } else if (computerChoice == 2) {
      loses++
      window.alert("Rock vs Paper, You lose!")
    } else if (computerChoice == 3) {
      wins++
      window.alert("Rock vs Scissors, You Win!")
    }
  }
  else if (playerchoice == "paper") {
    if (computerChoice == 1) {
      wins++
      window.alert("Paper vs Rock, You Win!")
    } else if (computerChoice == 2) {
      ties++
      window.alert("Paper vs Paper, You Tied")
    } else if (computerChoice == 3) {
      loses++
      window.alert("Paper vs Scissors, You Lose!")
    }
  }
  else if (playerchoice == "scissors") {
    if (computerChoice == 1) {
      loses++
      window.alert("Scissors vs Rock, You Lose!")
    } else if (computerChoice == 2) {
      wins++
      window.alert("Scissors vs Paper, You Win!")
    } else if (computerChoice == 3) {
      tied++
      window.alert("Scissors vs Scissors, You Tied")
    }
  }
  drawWins()
  drawLoses()
  drawTies()
}

function drawWins() {
  template = `
  Wins: ${wins}
  `
  document.getElementById("wins").innerHTML = template
}
function drawTies() {
  template = `
  Ties: ${ties}
  `
  document.getElementById("ties").innerHTML = template
}
function drawLoses() {
  template = `
  Loses: ${loses}
  `
  document.getElementById("loses").innerHTML = template
}