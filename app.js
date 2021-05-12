let ties = 0
let wins = 0
let loses = 0

function play(playerChoice) {
  if (typeof playerChoice != 'string') {
    throw new Error(`${playerChoice} is not a string`)
  }

  let computerChoice = Math.floor(Math.random() * 3) + 1

  if (playerChoice == "rock") {
    if (computerChoice == 1) {
      ties++
      drawComputerRock()
      drawTies()
    } else if (computerChoice == 2) {
      loses++
      drawComputerPaper()
      drawLoses()
    } else if (computerChoice == 3) {
      wins++
      drawWins()
      drawComputerScissors()
    }
    drawRock()
  }
  else if (playerChoice == "paper") {
    if (computerChoice == 1) {
      wins++
      drawWins()
      drawComputerRock()
    } else if (computerChoice == 2) {
      ties++
      drawTies()
      drawComputerPaper()
    } else if (computerChoice == 3) {
      loses++
      drawLoses()
      drawComputerScissors()
    }
    drawPaper()
  }
  else if (playerChoice == "scissors") {
    if (computerChoice == 1) {
      loses++
      drawLoses()
      drawComputerRock()
    } else if (computerChoice == 2) {
      wins++
      drawWins()
      drawComputerPaper()
    } else if (computerChoice == 3) {
      ties++
      drawTies()
      drawComputerScissors()
    }
    drawScissors()
  }
}

function drawWins() {
  template = `
  Wins: ${wins}
  `
  document.getElementById("wins").innerHTML = template
  template = `
  You Win!
  `
  document.getElementById("result").innerHTML = template

}
function drawTies() {
  template = `
  Ties: ${ties}
  `
  document.getElementById("ties").innerHTML = template
  template = `
  You Tied
  `
  document.getElementById("result").innerHTML = template
}
function drawLoses() {
  template = `
  Loses: ${loses}
  `
  document.getElementById("loses").innerHTML = template
  template = `
  You Lose!
  `
  document.getElementById("result").innerHTML = template
}

function drawRock() {
  document.getElementById("player-img").classList.remove("paper")
  document.getElementById("player-img").classList.remove("scissors")
  document.getElementById("player-img").classList.add("rock")
}
function drawPaper() {
  document.getElementById("player-img").classList.remove("scissors")
  document.getElementById("player-img").classList.remove("rock")
  document.getElementById("player-img").classList.add("paper")
}
function drawScissors() {
  document.getElementById("player-img").classList.remove("paper")
  document.getElementById("player-img").classList.remove("rock")
  document.getElementById("player-img").classList.add
    ("scissors")
}
function drawComputerRock() {
  document.getElementById("computer-img").classList.remove("computer-paper")
  document.getElementById("computer-img").classList.remove("computer-scissors")
  document.getElementById("computer-img").classList.add("computer-rock")
}
function drawComputerPaper() {
  document.getElementById("computer-img").classList.remove("computer-scissors")
  document.getElementById("computer-img").classList.remove("computer-rock")
  document.getElementById("computer-img").classList.add("computer-paper")
}
function drawComputerScissors() {
  document.getElementById("computer-img").classList.remove("computer-paper")
  document.getElementById("computer-img").classList.remove("computer-rock")
  document.getElementById("computer-img").classList.add("computer-scissors")
}
