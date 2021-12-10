class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.canvas = document.getElementById('hangman')
    this.secretWord = secretWord
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
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
    this.context.font = "40px Arial"
    this.context.textAlign = "center"
    this.context.textBaseline = "bottom"
    this.context.strokeStyle = "black"
    this.context.lineWidth = 2

    let space = 70
    let x = 375
    let y = 730

    for (let i=0; i<this.secretWord.length; i++){
      if (index === this.secretWord[i]) {
        this.context.fillText(index, x+(i*space), y)
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "25px Arial"
    this.context.textAlign = "end"
    this.context.textBaseline = "bottom"
    this.context.strokeStyle = "black"
    this.context.lineWidth = 2
    switch(errorsLeft) {
      case 9:
        this.context.fillText(letter, 800, 150)
        break;
      case 8:
        this.context.fillText(letter, 830, 150)
        break;
      case 7:
        this.context.fillText(letter, 860, 150)
        break;
      case 6:
        this.context.fillText(letter, 890, 150)
        break;
      case 5:
        this.context.fillText(letter, 920, 150)
        break;
      case 4:
        this.context.fillText(letter, 950, 150)
        break;
      case 3:
        this.context.fillText(letter, 980, 150)
        break;
      case 2:
        this.context.fillText(letter, 1010, 150)
        break;
      case 1:
        this.context.fillText(letter, 1040, 150)
        break;
      case 0:
        this.context.fillText(letter, 1070, 150)
    }

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
    this.context.clearRect(150, 150, 800, 500)
    const img = new Image()
    img.src = "../../lab-canvas-hangman/images/gameover.png"
    this.context.drawImage(img, 150, 150)
  }

  winner() {
    //this.context.clearRect(150, 150, 800, 500)
    const img = new Image()
    img.src = "../../lab-canvas-hangman/images/awesome.png"
    this.context.drawImage(img, 150, 80)
  }
}
