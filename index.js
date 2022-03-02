let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive =false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent= player.name + ": $" + player.chips


function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10 
    } else if ( randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
} 


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for ( let i=0 ; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message ="Do you want to draw a next card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
  
 }

if ( isAlive === true && hasBlackJack === false) {
    newCard()
}

function newCard () {
    if ( isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame() 
    }
    

}

// for ( let count = 10 ; count < 21; count += 1 ) {

//    console.log(count)
// }


// for ( let i = 10; i < 101; i += 10) {
//     console.log(i)
// }



// let messages = [
//     "heyy, how are you?",
//     "im great you",
//     "thanks",
//     "same here",
//     "great to here",
//     "bye"
// ]

// console.log(messages)

// for ( let i=0; i < messages.length; i+=1) {
//     console.log(messages[i])
// }


// let cardsss = [7, 3, 9]

// for ( let i=0; i<cardsss.length; i++) {
//     console.log(cardsss[i])
// }


// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// for ( let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }



// let player1Time = 102
// let player2Time = 107
//  function getFastestRaceTime () {
//      if (player1Time < player2Time){
//          return player1Time
//      } else if (player2Time < player1Time) {
//          return player2Time
//      } else {
//          return player1Time
//      }
//  }

//  let fastestRace = getFastestRaceTime()
//  console.log(fastestRace)



//  function getTotalRaceTime() {
//      return player1Time + player2Time
//  }

//  let totalTime = getTotalRaceTime()
//  console.log(totalTime)






// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6 ) + 1
//     return randomNumber
// }

// console.log( rollDice() )

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)



// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generetaCertificate()
// } else console.log("No")

// function generetaCertificate() {
//     console.log("Genereating certificate...")
// }


// let hasSolvedChallenge = true
// let hasHintsLeft = false
// if ( hasSolvedChallenge === false || hasHintsLeft === false) {
//     showSolution ()
// }

// function showSolution() {
//     console.log("Showing the solution...")
// }

// let likesDocumentaries = true
// let likesStartups = false

// if ( likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }
// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }


// let course = {
//     title: "Learn CSS",
//     lessons: 16,
//     creator: "Per",
//     lenght: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.lessons)

// let castle = {
//     title: "Live like a king in my castle",
//     location:"London downtown",
//     costPerNight: 200,
//     isAvaliable: true,
//     features: ["4 guests", "bedroom", "half bath"]
// }

// console.log(castle.location)
// console.log(castle.costPerNight)
// console.log(castle.isAvaliable)
// console.log(castle.features)
