//global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback

//Global Variables
var pattern = [2, 1, 4, 3, 6, 5, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0;
var counter = 5;
var timer;

function ticker() {
  console.log(counter);
  document.getElementById("timer").innerHTML = "Seconds Left:  " + counter;
  counter--;
  if (counter === -1) {
    loseGame();
    document.getElementById("timer").innerHTML = null;
    clearInterval(timer);
  }
}

//function sleep(milliseconds) {
//  const date = Date.now();
//  let currentDate = null;
//  do {
//    currentDate = Date.now();
// } while (currentDate - date < milliseconds);
//}

function startGame() {
  //initialize game variables
  counter = 5;
  //timer = setInterval(ticker, 1500);
  progress = 0;
  strikes = 0;
  gamePlaying = true;
  randPattern(pattern);
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  clearInterval(timer);
  document.getElementById("timer").innerHTML = null;
  gamePlaying = false;
  clueHoldTime = 1000;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 539,
  6: 777
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); //set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 25;
    console.log("clueHoldTime: " + clueHoldTime);
  }
  clearInterval(timer);
  //counter = 5;
  timer = setInterval(ticker, 1500);
  //sleep(clueHoldTime/2);
  //setTimeout(tocker, clueHoldTime);
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) return;

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        counter += 7;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if (strikes == 2) loseGame();
    else {
      strikes++;
      clueHoldTime += 25 * (progress + 1);
      counter += 5;
      console.log("strike");
      console.log("clueHoldTime: " + clueHoldTime);
      alert("Strike: " + strikes);
      playClueSequence();
    }
  }
}

function randPattern(array) {
  for (var i = 0; i < array.length; i++)
    array[i] = Math.floor(Math.random() * Math.floor(6)) + 1;
}
