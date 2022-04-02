// ----------- Global Constants -----------
const cluePauseTime = 333;  // how long to pause in between clues
const nextClueWaitTime = 1000  // how long to wait before starting playback of the clue sequence

// ----------- Global Variables -----------
var pattern = [];  // Sequence of clues
var progress = 0;  // which turn we are on
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  // must be between 0.0 and 1.0
var guessCounter = 0;  // where the user is in the clue sequence 
var clueHoldTime = 1000;  // how long to hold each clue's light/sound
var mistakesCounter = 0;  // Number of mistakes made

// ----------- Start and Stop the game -----------
function startGame() {
  
  // Initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakesCounter = 0
  nextClueWaitTime = 1000
  
  // Generate secret pattern
  patternRandomizer();
  
  // Swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  
  // Start playing clues
  playClueSequence();
}

function stopGame() {
  
  // Update game variables
  gamePlaying = false;
  
  // Swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");  
}


// ----------- Sound Synthesis Functions -----------
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 523,
  6: 630,
  7: 735,
  8: 840
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


// ----------- Page Initialization -----------
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


// ----------- Lighting Buttons-----------
function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}


// ----------- Play Sound and Visual Clues -----------
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  clueHoldTime -= 50;
  let delay = nextClueWaitTime;  // set delay to initial wait time
  for (let i = 0; i <= progress; i++) {  // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + " ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


// ----------- Win and Lose Game functions -----------
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}


// ----------- Guess logic function -----------
function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) {  // Check if the game has started
    return;
  }
  
  // Game logic
  if (btn != pattern[guessCounter]) {  // If incorrect guess
    mistakesCounter++;
    console.log("user has made: " + mistakesCounter + " mistakes")
    if (mistakesCounter == 3) {
      loseGame();
    }
  } else if (guessCounter != progress) {  // If turn is not over
    guessCounter++;
  } else if (progress != pattern.length - 1) {  // If this is not the last turn
    progress++;
    playClueSequence();
  } else { // If last turn, turn is over, and correct guess, then you win!
    winGame();
  }
}

function patternRandomizer() {
  for (let i = 0; i < 8; i++) {  // Creates pattern of 8 buttons
    pattern[i] = Math.floor((Math.random() * 8) + 1);
  }
  
  console.log("Random pattern: " + pattern);
}