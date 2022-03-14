// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];

// loop to add event listeners to each card
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", displayCard);
};

// toggles open and show class to display cards
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}
