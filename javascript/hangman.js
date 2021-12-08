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
    let randomWord = this.words[randomIndex]
    return randomWord
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) return true
    return false
  }

  checkClickedLetters(letter) {
    for (let i=0; i<this.letters.length; i++) {
      if (letter === this.letters[i]) {
        return false
      }
    }
    return true
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
    if (this.pickWord.length === this.guessedLetters.length) {
      console.log('user won')
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    if (!this.letters.includes(letter)) {
      this.letters.push(letter)
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
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
