$(document).ready(function(){
  $(document).on("click",(evt) => {
    let direction = -1
    if (!($(evt.target).is("div") || $(evt.target).is("input"))){
      if ($("div.mode").hasClass("rotate")){
        let rotator = new Rotator(evt.pageX - 75, evt.pageY - 25, 50)
        let rotatorView = new RotatorView(rotator, direction)
        rotatorView.render()
        direction *= -1
      } else {
        let ball = new Ball(evt.pageX - 25, evt.pageY - 25, 0)
        let ballView = new BallView(ball)
        ballView.render()
      }
    }
  })
  $("div.mode").click(function(){
    $(this).toggleClass("rotate")
    $(this).toggleClass("drop")
    $(this).html($(this).hasClass("rotate") ? "Rotate" : "Drop Ball")
  })
})
