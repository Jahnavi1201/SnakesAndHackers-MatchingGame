/***This CSS file contain all the styles required for game components***/


html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/*Styles for body*/
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

/* Background pattern*/
body {
  background: #ffffff url('../img/geometry2.png');
  font-family: 'Coda', cursive;
}

/*Styles for container*/
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}

/*Styles for deck of cards in the game window*/
.deck {
  width: 650px;
  min-height: 610px;
  background: linear-gradient(160deg, #e3be90 30%, #ed9e8c 70%);
  padding: 32px;
  border-radius: 5%;
  box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 0;
}

.deck .card {
  height: 115px;
  width: 120px;
  background: #2e3d49;
  font-size: 0;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
}

.deck .card.open {
  transform: rotateY(0);
  background: linear-gradient(160deg, #e3be90 30%, #ed9e8c 70%);
  cursor: default;
}

.deck .card.show {
  font-size: 33px;
}

.deck .card.match {
  cursor: default;
  background: linear-gradient(200deg, #ed9e8c 30%, #e3be90 70%);
  font-size: 33px;
}

.disabled {
  pointer-events: none;
}

/*Styles for the score panel*/
.score-panel {
  text-align: left;
  width:500px;
  margin-bottom: 10px;
  font-size: 15pt;
}

.score-panel .stars {
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px 0 0;
  margin-right: 20px;
}

.score-panel .stars li {
  list-style: none;
  display: inline-block;
}

.score-panel .restart {
  float: right;
  cursor: pointer;
  margin-right: 0px;
  position: relative;
}

.restarttext {
  visibility: hidden;
}

.score-panel .restart:hover .fa-repeat {
  transform: scale(1.2);
}

.restart:hover .restarttext {
  visibility: visible;
}



.pausediv {
  position: relative;
}

.pausetext {
  visibility: hidden;
  margin-right: 40px;
}

.pause {
  border-radius: 10px;
}

.pause:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.pausediv:hover .pausetext {
  visibility: visible;
}

.moves {
  margin-right: 20px;
}

/*Styles for "wobble" class*/
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes wobble {
  0% {
    transform: translateX(0%);
  }

  15% {
    transform: translateX(-25%) rotate(-5deg);
  }

  30% {
    transform: translateX(20%) rotate(3deg);
  }

  45% {
    transform: translateX(-15%) rotate(-3deg);
  }

  60% {
    transform: translateX(10%) rotate(2deg);
  }

  75% {
    transform: translateX(-5%) rotate(-1deg);
  }

  100% {
    transform: translateX(0%);
    transform: scale(1.1);
  }
}

.wobble {
  animation-name: wobble;
}

/*Styles for "wobble1" class*/
@keyframes wobble1 {
  0% {
    transform: translateX(0%);
  }

  15% {
    transform: translateX(-25%) rotate(-5deg);
  }

  30% {
    transform: translateX(20%) rotate(3deg);
  }

  45% {
    transform: translateX(-15%) rotate(-3deg);
  }

  60% {
    transform: translateX(10%) rotate(2deg);
  }

  75% {
    transform: translateX(-5%) rotate(-1deg);
  }

  100% {
    transform: translateX(0%);
    transform: scale(1.3);
  }
}

.wobble1 {
  animation-name: wobble1;
}

/*Styles for the window that will be displayed at the end of the game*/
.Modalbox {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(160deg, #e3be90 30%, #ed9e8c 70%);
}

/*Styles for the content of the window that will be displayed at the end of the game*/
.Modalcontent {
  text-align: center;
  background: #ffffff url('../img/tenor.gif');
  padding: 10px;
  border-radius: 10px;
  margin: 10% auto;
  width: 50%;
  height: auto;
  font-family: cursive;
  font-size: 20pt;
  float: center;
}

/*Styles for the Close Button */
.close {
  float: right;
  float: top;
  border: none;
  padding: 1px;
  background: linear-gradient(160deg, #F1948A 0%, #D35400 100%);
  width: 20px;
  height: 20px;
  color: black;
  font-weight: bold;
  border-radius: 5px;
  border-color: white;
  font-size: 14pt;
}

.close:hover,
.close:focus {
  transform: scale(1.2);
  cursor: pointer;
}

/*Styles for the rating division*/
.rating {
  display: flex;
  flex-wrap: wrap;
  height:20%;
  justify-content: space-around;
  padding-right: 25px;
}
/*Styles for the play again button*/
.play_again {
  border-radius: 10px;
  font-weight: bold;
  height: 40px;
  font-family: cursive;
  background: linear-gradient(160deg, #ed9e8c 30%, #e3be90 70%);
  cursor: pointer;
  border-style: solid;
  font-size: 15pt;
}

.play_again:hover {
  transform: scale(1.1);
}

/*Styles for the content of the window that will be displayed when clicked on pause button*/
.pauseresume {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
}

.pauseresumecontent {
  text-align: center;
  background: linear-gradient(160deg, #e3be90 30%, #ed9e8c 70%);
  padding: 10px;
  border-radius: 10px;
  margin: 15% auto;
  width: 30%;
  height: auto;
  display: flex;
  justify-content: space-around;
}

.resume, .restart {
  border-radius: 50%;
}

.resumediv, .restartdiv {
  background-color: white;
  border-radius: 10%;
  cursor: pointer;
  height: 150px;
}

.resumediv:hover, .restartdiv:hover {
  transform: scale(1.1);
  border-radius: 40px;
}
@media screen and (min-width:320px) and (max-width:500px){
  h1{
    font-size: 25px;
  }
  .deck{
    width:90vw;
    min-height:400px;
    padding: 5px;
    justify-content: space-around;
  }
  .deck .card {
    height: 65px;
    width: 65px;
    margin:5px;
  }
 .score-panel{
   width:80vw;
 }
 .pausetext{
   margin-right: 0px;
   font-size: 0pt;
 }
 .score-panel .stars{
   margin-right: 0px;
 }
 .moves{
   margin-right: 0px;
 }
 .restarttext{
   font-size: 0pt;
 }
 .pauseresumecontent{
   height:auto;
   width:80vw;
 }
 .Modalcontent{
   width:90vw;
 }
}
