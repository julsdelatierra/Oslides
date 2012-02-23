var twisterIn = function(slide){
    startPoint = "scale(0) rotate(5deg)";
    incoming = "scale(1) rotate(360deg)";
    slide.style.MozTransform = startPoint;
    slide.style.WebkitTransform = startPoint;
    slide.style.OTransform = startPoint;
    slide.style.display = "";
    animation = setInterval(function(){
        console.log(incoming);
        slide.style.MozTransform = incoming;
        slide.style.WebkitTransform = incoming;
        slide.style.OTransform = incoming;
    },500);
    slide.addEventListener("webkitTransitionEnd", function(){
      clearInterval(animation);
    }, true);
    slide.addEventListener("transitionend", function(){
      clearInterval(animation);
    }, true);
    slide.addEventListener("oTransitionEnd", function(){
      clearInterval(animation);
    }, true);
    slide.addEventListener("MSTransitionEnd", function(){
      clearInterval(animation);
    }, true);
};

var zoomIn = function(slide){
    startPoint = "scale(0) rotate(0deg)";
    incoming = "scale(1) rotate(0deg)";
    slide.style.MozTransform = startPoint;
    slide.style.WebkitTransform = startPoint;
    slide.style.OTransform = startPoint;
    slide.style.display = "";
    animation = setInterval(function(){
        console.log(incoming);
        slide.style.MozTransform = incoming;
        slide.style.WebkitTransform = incoming;
        slide.style.OTransform = incoming;
    },500);
    slide.addEventListener("webkitTransitionEnd", function(){
      clearInterval(animation);
    }, true);
    slide.addEventListener("transitionend", function(){
      clearInterval(animation);
    }, true);
    slide.addEventListener("oTransitionEnd", function(){
      clearInterval(animation);
    }, true);
    slide.addEventListener("MSTransitionEnd", function(){
      clearInterval(animation);
    }, true);
}

var fadeIn = function(slide){
    opacity = 0.0;
    slide.style.opacity = opacity;
    slide.style.display = "";
    animation = setInterval(function(){
        console.log(opacity);
        opacity+=0.1;
        slide.style.opacity =  opacity;
        if (opacity>=1.0) {
            clearInterval(animation);
        };
    },100);
}

var transitions_in = {
    "twister" : twisterIn,
    "zoomIn" : zoomIn,
    "fadeIn" : fadeIn,
}
