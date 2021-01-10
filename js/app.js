/*** This javascript file contain all the logic that is required for the "memory game" ***/


"use strict";
var clickedcards = []; //variables required are declared here.
var no_of_moves = 0;
var match_cnt = 0;
var sec = 1;
var min = 0;
var ind = 0;
var interval;
var total_time;
var cards = [...document.querySelectorAll(".card")]; //"DOM selectors" are used to get elements by class name.
var star = [...document.querySelectorAll(".fa-star")];
var modal = document.querySelector(".Modalbox");
var close = document.querySelector(".close");
var p = document.querySelector(".pause");
var pr = document.querySelector(".pauseresume");
var pa = document.querySelector(".play_again");
var deck = document.querySelector(".deck");
var card = shuffle(cards);
var beep = new Audio(); //Objects are created for the "Audio" class.
beep.src = "./sounds/click.mp3";
var incorrect = new Audio();
incorrect.src = "./sounds/incorrect.mp3";
var gamewin = new Audio();
gamewin.src = "./sounds/gamewin.mp3";
//The following code makes the game window to be closed when clicked on "close" button.
close.onclick = function() {
  modal.style.display = "none";
}
for (var i = 0; i < 16; i++) {
  [].forEach.call(cards, (lst) => {
    deck.appendChild(lst);
  });
}
//The following code makes the game to be reloaded when clicked on "play again" button.
document.querySelector(".play_again").addEventListener("click", restart_Game)
//The following code makes the game to be reloaded when clicked on "restart" button.
document.querySelector(".restart").addEventListener("click", restart_Game);
//The following code makes the game to be resumed when clicked on "resumediv" division*/
document.querySelector(".resumediv").addEventListener("click", resume_Game);
//The following code makes the game to be reloaded when clicked on "restartdiv" division*/
document.querySelector(".restartdiv").addEventListener("click", restart_Game);
//The following code makes the game to be paused when clicked on "pause" button.
document.querySelector(".pause").addEventListener("click", pause_Game);
//The following loop makes the card to be flipped when clicked on it.
for (var i in cards) {
  cards[i].addEventListener("click", displayCard);
}
//The following function is invoked when clicked on a card.
function displayCard() {
  beep.play();
  if (ind == 0) {
    time();
  }
  clickedcards.push(this);
  this.classList.add("open", "show", "disabled");
  if (clickedcards.length == 2) {
    setTimeout(compare, 300);
  }
}
//The following function performs the comparison of two clicked cards.
function compare() {
  mcount();
  if (clickedcards[0].children[0].className == clickedcards[1].children[0].className) {
    // The following code execute if the clicked two cards matches.
    clickedcards[0].classList.add("match", "animated", "wobble");
    clickedcards[1].classList.add("match", "animated", "wobble");
    clickedcards[0].classList.remove("open", "show");
    clickedcards[1].classList.remove("open", "show");
    clickedcards[0].style.borderRadius = "50%";
    clickedcards[1].style.borderRadius = "50%";
    match_cnt += 1;
  } else {
    incorrect.play();
    // The following code execute if the clicked two cards doesn't not match
    clickedcards[0].classList.remove("open", "show", "disabled");
    clickedcards[1].classList.remove("open", "show", "disabled");
  }
  clickedcards = [];
  //The following code makes a window to be popped-up when the player makes 8 matches.
  if (match_cnt == 8) {
    //The following code execute if the player make 8 matches.
    for (var i in cards) {
      cards[i].classList.add("animated", "wobble1");
    }
    clearInterval(interval);
    gamewin.play();
    document.querySelector(".tot_moves").innerHTML = "<b>You have made </b>" + no_of_moves + " flips";
    total_time = min + " min " + (sec - 1) + " sec";
    document.querySelector(".tot_time").innerHTML = "<b>in </b>" + total_time;
    setTimeout(function() {
      modal.style.display = "block";
    }, 2000);
    var final_star = [...document.querySelector(".stars").children];
    document.querySelector(".final_stars").children[0].className = final_star[0].children[0].className;
    document.querySelector(".final_stars").children[1].className = final_star[1].children[0].className;
    document.querySelector(".final_stars").children[2].className = final_star[2].children[0].className;
  }
  //The following code performs star rating based on specified conditions.
  if (no_of_moves == 15) {
    star[2].classList.add("fa-star-o");
    star[2].classList.remove("fa-star");
  }
  if (no_of_moves == 20) {
    star[1].classList.add("fa-star-o");
    star[1].classList.remove("fa-star");
  }
}
//The following function manages count of moves.
function mcount() {
  no_of_moves += 1;
  document.querySelector(".moves").innerHTML = no_of_moves;
}
//The following function makes the game window to be reloaded.
function restart_Game() {
  window.location.reload();
}
var m = document.querySelector(".minute");
var s = document.querySelector(".second");
//The following function holds the time taken for completing the game.
function time() {
  ind = 1;
  interval = setInterval(() => {
    if (sec < 10) {
      s.innerHTML = "0" + sec;
    } else {
      s.innerHTML = sec;
    }
    if (min < 10) {
      m.innerHTML = "0" + min;
    } else {
      m.innerHTML = min;
    }
    sec += 1;
    if (sec == 60) {
      min += 1;
      sec = 0;
    }
  }, 1000);
}
/*The following function makes the timer to be stopped and a pop-up window to be displayed when clicked on
pause button*/
function pause_Game() {
  clearInterval(interval);
  pr.style.display = "block";
}
/*The following function makes the timer to be resumed and the unhidden pop-up window to be hidden when
clicked on resume division*/
function resume_Game() {
  pr.style.display = "none";
  time();
}
//The following function holds the code for shuffling the cards.
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
