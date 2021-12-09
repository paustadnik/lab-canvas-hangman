class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.canvas = document.getElementById('hangman')
    this.secretWord = secretWord
  }

  createBoard() {
    //this.context.clearRect(0, 0, canvas.width, canvas.height)
    this.context.fillStyle = "honeydew"
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    // this.context.fillStyle = "red"
    //this.context.fillRect(100, 100, 200, 200)
  }

  drawLines() {
    console.log(this.secretWord)
    this.context.lineWidth = 4
    this.context.strokeStyle = "black"

    let lineLength = 50
    let space = 20
    let x = 350
    let y = 750
    for (let i=0; i<this.secretWord.length; i++) {
      this.context.beginPath()
      this.context.moveTo(x, y)
      this.context.lineTo(x+lineLength, y)
      this.context.stroke()
      this.context.closePath()
      x += lineLength + space
    }
  }

  writeCorrectLetter(index) {
    
    
  }

  writeWrongLetter(letter, errorsLeft) {
    //fillText(text,x,y)
    this.context
  }

  drawHangman(errorsLeft) {
    this.context.lineWidth = 4
    this.context.strokeStyle = "black"
    this.context.beginPath()
    switch(errorsLeft) {
      case 9:
        this.context.moveTo(200, 680)
        this.context.lineTo(100, 750)
        this.context.stroke()
        break;
      case 8:
        this.context.moveTo(100, 750)
        this.context.lineTo(300, 750)
        this.context.stroke()
        break;
      case 7:
        this.context.moveTo(300, 750)
        this.context.lineTo(200, 680)
        this.context.stroke()
        break;
      case 6:
        this.context.moveTo(200, 680)
        this.context.lineTo(200, 100)
        this.context.stroke()
        break;
      case 5:
        this.context.moveTo(200, 100)
        this.context.lineTo(600, 100)
        this.context.stroke()
        break;
      case 4:
        this.context.moveTo(600, 100)
        this.context.lineTo(600, 200)
        this.context.stroke()
        this.context.closePath()
        break;
      case 3:
        this.context.beginPath()
        this.context.arc(600, 250, 50, 0, Math.PI*2)
        this.context.stroke()
        this.context.closePath()
        break;
      case 2:
        this.context.beginPath()
        this.context.moveTo(600, 300)
        this.context.lineTo(600, 450)
        this.context.stroke()
        break;
      case 1:
        this.context.moveTo(650, 550)
        this.context.lineTo(600, 450)
        this.context.stroke()
        break;
      case 0:
        this.context.moveTo(600, 450)
        this.context.lineTo(550, 550)
        this.context.stroke()
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
