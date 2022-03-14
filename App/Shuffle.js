// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    const currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// deck of all cards in game
const deck = document.querySelector(".deck");

function startGame() {
    const shuffledCards = shuffle(cards);

    for (let i= 0; i < shuffledCards.length; i++){
        [].forEach.call(shuffledCards, function(item){
            deck.appendChild(item);
        });
    }
}
