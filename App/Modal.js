// modal
let modal = document.getElementById("popup1")

// stars list
let starsList = document.querySelectorAll(".stars li");

// close icon in modal
let closeicon = document.querySelector(".close");

// congratulations when all cards match, show modal and moves, time and rating
function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;

        // show congratulations modal
        modal.classList.add("show");

        // declare star rating variable
        var starRating = document.querySelector(".stars").innerHTML;

        // showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;

        // closeicon on modal
        closeModal();
    };
}
// close icon on modal
function closeModal() {
    closeicon.addEventListener("click", function(e) {
        modal.classList.remove("show");
        startGame();
    });
}

// for player to play Again
function playAgain() {
    modal.classList.remove("show");
    startGame();
}
