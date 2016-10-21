class RotatorView {
  constructor(rotator, direction){
    this.rotator = rotator
    this.el = $("<div class='rotator'></div>")
    this.el.css({
      position: "absolute",
      background: this.getCurrentColor()
    })
    this.setPosition()
    this.intervalID = null
    this.intervalLength = 25
    this.direction = direction
    this.el.on("click", () => {
      this.toggleRotation()
      this.createNewRotator()
    })
  }
  render(){
    $("body").append(this.el)
  }
  startRotate(){
    this.intervalID = setInterval(() => {
      this.rotator.rotate(this.direction)
      this.setPosition()
    }, this.intervalLength)
  }
  stopRotate(){
    clearInterval(this.intervalID)
    this.intervalID = null
  }
  setPosition(){
    this.el.css({
      left: this.rotator.currentX,
      top: this.rotator.currentY
    })
  }
  toggleRotation(){
    this.intervalID ? this.stopRotate() : this.startRotate(this.direction)
  }
  createNewRotator(){
    let rotator = new Rotator(this.rotator.currentX, this.rotator.currentY, 100)
    let rotatorView = new RotatorView(rotator, -1 * this.direction)
    rotatorView.render()
    rotatorView.startRotate()
  }
  getCurrentColor(){
    return $("#colorField").val()
  }
}
