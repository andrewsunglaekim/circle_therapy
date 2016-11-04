class RotatorView {
  constructor(rotator, direction){
    this.rotator = rotator
    this.el = $("<div class='rotator'></div>")
    this.el.css({
      position: "absolute",
      background: this.getCurrentColor() || this.getRandomColor()
    })
    this.setPosition()
    this.intervalID = null
    this.intervalLength = 25
    this.direction = direction
    this.el.on("click", (evt) => {
      this.toggleRotation()
      this.createNewRotator()
      this.clickOthers(evt)
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
    let rotator = new Rotator(this.rotator.currentX, this.rotator.currentY, 100, Math.PI * 2 * Math.random())
    let rotatorView = new RotatorView(rotator, -1 * this.direction)
    rotatorView.render()
    rotatorView.startRotate()
  }
  getCurrentColor(){
    return $("#colorField").val()
  }
  clickOthers(evt){
    this.el.siblings("div.rotator").filter(function(){
      let insideX = (parseInt($(this).css("left")) < evt.clientX) && (parseInt($(this).css("left")) > evt.clientX - 50)
      let insideY = (parseInt($(this).css("top")) < evt.clientY) && (parseInt($(this).css("top")) > evt.clientY - 50)
      return insideX && insideY
    }).click()
    // cursor x
  }
  getRandomColor(){
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()})`
  }
}
