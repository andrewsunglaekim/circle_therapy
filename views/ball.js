class BallView {
  constructor(ball){
    this.ball = ball
    this.el = $("<div class='circle'></div>")
    this.el.css({
      position: "absolute",
      background: this.getCurrentColor() || this.getRandomColor()
    })
    this.intervalID = null
    this.intervalLength = 20
    this.setPosition()
    this.setInMotion()
    this.falling = true
    this.bounceCounter = 0
    $(window).on("resize", () => {
      this.setInMotion()
    })
    this.el.on("click", (evt) => {
      this.toggleMotion()
    })
  }
  toggleMotion(){
    this.intervalID ? this.stopMotion() : this.setInMotion()
  }
  stopMotion(){
    clearInterval(this.intervalID)
    this.intervalID = null
  }
  setPosition(){
    this.el.css({
      left: this.ball.positionX,
      top: this.ball.positionY
    })
  }
  render(){
    $("body").append(this.el)
  }
  setInMotion(){
    if (!this.intervalID){
      this.intervalID = setInterval(() => {
        this.prevValue = parseFloat(this.ball.positionY)
        this.ball.incrementTime(.15)
        this.checkBounce()
        this.setPosition()
      }, this.intervalLength)
    }
  }
  checkBounce(){
    if(this.ball.positionY >= $(window).height() - 25 && this.isFalling()){
      this.ball.velocity = -.95 * this.ball.velocity
      this.ball.initVelocity = this.ball.velocity
      this.ball.time = 0
      this.ball.initPosY = $(window).height() - 25
      this.bounceCounter++
      this.isBottom()
      if (!this.bounceCounterTimeoutId){
        this.bounceCounterTimeoutId = setTimeout(() => {
          this.bounceCounter = 0
          this.bounceCounterTimeoutId = null
        }, 2000)
      }
    }
  }
  isFalling(){
    return this.prevValue < this.ball.positionY
  }
  stopBall(){
    clearInterval(this.intervalID)
    this.intervalID = null
  }
  isBottom(){
    if(this.bounceCounter > 9){
      this.stopBall()
    }
  }
  getRandomColor(){
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()})`
  }
  getCurrentColor(){
    return $("#colorField").val()
  }
}
