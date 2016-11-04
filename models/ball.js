class Ball {
  constructor(initPosX, initPosY, initVelocity){
    this.initVelocity = initVelocity
    this.velocity = initVelocity
    this.initPosY = initPosY
    this.initPosX = initPosX
    this.positionY = initPosY
    this.positionX = initPosX
    this.time = 0
    this.acceleration = -9.8
  }
  setVelocity(){
    this.velocity = this.initVelocity + this.acceleration * this.time
  }
  setPosY(){
    this.positionY = this.initPosY - (this.initVelocity * this.time + 1/2 * this.acceleration * Math.pow(this.time, 2))
  }
  incrementTime(time){
    this.time += time
    this.setVelocity()
    this.setPosY()
  }
}
