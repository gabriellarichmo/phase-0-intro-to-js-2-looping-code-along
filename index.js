// Code your solutions in this file
const cardRecipients = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cardRecipients) {
  let i = 0; 
  let cardMessage = []
  while (i < cardRecipients.length) {
    cardMessage.push(`Thank you, ${cardRecipients[i]}, for the wonderful surprise gift!`);
    i++;
  }
return cardMessage;
}

function countDown(){
  for (let i= 10; i >= 0; i--) {
    console.log(i);
  }
}
