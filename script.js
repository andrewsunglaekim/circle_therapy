$(document).ready(function(){
  console.log("hello");
  $(document).on("click", function(evt){
    createCenter(evt)
    createRotator(evt, 100, -1, 0.33)
  })

  function createCenter(evt){
    var el = $("<div class='center'></div>")
    el.css({
      position: "absolute",
      top: evt.pageY - 25 ,
      left: evt.pageX -25
    })
    console.log(evt)
    $("body").append(el)

  }

  function createRotator(evt, radius, direction, startPercent){
    var el = $("<div class='rotator'></div>")
    var originX = evt.pageX - 25
    var originY = evt.pageY - 25
    var t = convertPercentToT(startPercent)
    var xValue = getXonCircumference(originX, radius, t)
    var yValue = getYonCircumference(originY, radius, t)
    el.css({
      position: "absolute",
      left: xValue,
      top: yValue
    })
    $("body").append(el)
    setInterval(function(){
      t += direction * 0.02
      xValue= getXonCircumference(originX, radius, t)
      yValue= getYonCircumference(originY, radius, t)
      el.css({
        left: xValue,
        top: yValue
      })
    }, 25)
  }
})

// increment x or y over time, get opposite value through formula
// adjust top and left properties based on x and y
function getXonCircumference(a, r, t){
  return a + r * Math.cos(t)
}
function getYonCircumference(b, r, t){
  return b + r * Math.sin(t)
}

function convertPercentToT(percent){
  return percent * Math.PI * 2
}
