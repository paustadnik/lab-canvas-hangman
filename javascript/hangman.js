class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    let randomIndex = Math.floor(Math.random()*this.words.length)
    let randomWord = this.words[randomIndex].toUpperCase()
    return randomWord
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) return true
    return false
  }

  checkClickedLetters(letter) { //is the letter new?
    if (this.letters.includes(letter)) return false
    return true
  }

  addCorrectLetter(letter) {
    for (let i=0; i<this.secretWord.length; i++) {
      if (letter === this.secretWord[i]){
        this.guessedLetters += letter
        this.letters.push(letter)
        console.log(`${letter} has been added to guessed letters ${this.guessedLetters}`)
      }
    }
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft -= 1
      if (!this.letters.includes(letter)) {
        this.letters.push(letter)
        console.log(`${letter} has been added to letters ${this.letters}`)
      }
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) return true
    return false
  }

  checkWinner() {
    if (this.secretWord.length === this.guessedLetters.length) {
      return true
    }
    return false
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard()
    hangmanCanvas.drawLines()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  let key = String.fromCharCode(event.keyCode)
  //console.log(key)
  if (hangman.checkIfLetter) {
    console.log(`${key} is a letter`)
    if (hangman.checkClickedLetters(key)) {
      console.log(`${key} hasn't been pressed before`)
      hangman.addCorrectLetter(key)
      hangman.addWrongLetter(key)
      hangmanCanvas.drawHangman(hangman.errorsLeft)
    }
    else {
      console.log(`${key} was already pressed`)
    }
    
    

  }

  

});
