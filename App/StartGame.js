StartGame() {
    // shuffle deck
    cards = shuffle(cards);

    // remove all existing classes from each card
    for (let i = 0; i < cards.length; i++) {
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match",            "disabled");
    }

    // reset moves
    moves = 0;
    counter.innerHTML = moves;

    // reset star rating
    for (let i= 0; i < stars.length; i++){
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }

    //reset timer
    let timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}
