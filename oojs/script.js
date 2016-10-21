$(document).ready(function(){
  $(document).on("click",(evt) => {
    console.log(evt.clientY);
    console.log(evt.clientX);
    let direction = -1
    if (!($(evt.target).is("div") || $(evt.target).is("input"))){
      let rotator = new Rotator(evt.pageX - 75, evt.pageY - 25, 50)
      let rotatorView = new RotatorView(rotator, direction)
      rotatorView.render()
      direction *= -1
    }
  })
})
