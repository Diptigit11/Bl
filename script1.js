
let firstCard=getRandomCards()
let secondCard=getRandomCards()
let cardss=[firstCard,secondCard]

let Sum=firstCard + secondCard
let hasBlackJack=false
let isAlive=true
let message=""
let message_El=document.getElementById("message-el")
console.log(message_El)
let sum_El=document.querySelector("#sum_el")
console.log(sum_El)
let cards_El=document.getElementById("cards_el")
console.log(cards_El)

let player={
  name:"Robert",
chips:145
}

let player_EL=document.getElementById("player-el")
player_EL.textContent=player.name + ": $" + player.chips

function getRandomCards() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum > 10) {
      return 10;
    } else if (randomNum === 1) {
      return 11;
    } else {
      return randomNum;
    }
  }
  

function startGame(){
    renderGame();
}

function renderGame(){
if(Sum<21){
    message="Do you want to draw a new Card🙂?"

}
else if(Sum===21){
   message="Congratulations!!! You've got BlackJack🥳"
    hasBlackJack=true
}
else{
    message="Sorry you lost...Better Luck Next Time😞"
    isAlive=false
}
console.log(hasBlackJack)
console.log(isAlive)

message_El.textContent=message
sum_El.textContent= "Sum:" + (Sum)
cards_El.textContent="Cards :"
for(let i=0;i<cardss.length;i++){
    cards_El.textContent+=cardss[i] + " "
}
}

 function New_Card(){
  if(  isAlive===true &&   hasBlackJack===false){
    console.log("Drawing a new card from the deck")
    let card=getRandomCards()
     Sum += card
     cardss.push(card)
     

     console.log(Sum)
    renderGame()
  }
 }

