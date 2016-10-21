class Rotator {
  constructor(centerX, centerY, radius, t = 0){
    this.centerX = centerX;
    this.centerY = centerY;
    this.angle = t
    this.radius = radius
    this.angleInc = 0.02
    this.currentX = this.getXonCircumference()
    this.currentY = this.getYonCircumference()
  }
  rotate(direction){
    this.angle += direction * this.angleInc
    this.currentX = this.getXonCircumference()
    this.currentY = this.getYonCircumference()
  }
  getXonCircumference(){
    return this.centerX + this.radius * Math.cos(this.angle)
  }
  getYonCircumference(b, r){
    return this.centerY + this.radius * Math.sin(this.angle)
  }
}
