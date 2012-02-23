var twisterIn = function(slide){
    startPoint = "scale(0) rotate(5deg)";
    incoming = "scale(1) rotate(360deg)";
    slide.style.MozTransform = startPoint;
    slide.style.WebkitTransform = startPoint;
    slide.style.OTransform = startPoint;
    slide.style.display = "";
    animation = setInterval(function(){
        slide.style.MozTransform = incoming;
        slide.style.WebkitTransform = incoming;
        slide.style.OTransform = incoming;
        slide.style.MSTransform = incoming;
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
        slide.style.MozTransform = incoming;
        slide.style.WebkitTransform = incoming;
        slide.style.OTransform = incoming;
        slide.style.MSTransform = incoming;
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
    property = "opacity";
    duration = "1s";
    slide.style.transitionProperty = property;
    slide.style.transitionDuration = duration;
    slide.style.MozTransitionProperty = property;
    slide.style.MozTransitionDuration = duration;
    slide.style.WebkitTransitionProperty = property;
    slide.style.WebkitTransitionDuration = duration;
    slide.style.OTransitionProperty = property;
    slide.style.OTransitionDuration = duration;
    slide.style.opacity = 0;
    slide.style.display = "";
    animation = setInterval(function(){
        slide.style.opacity = 1;
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

var fallIn = function(slide){
    property = "margin, opacity";
    duration = "1s";
    slide.style.transitionProperty = property;
    slide.style.transitionDuration = duration;
    slide.style.MozTransitionProperty = property;
    slide.style.MozTransitionDuration = duration;
    slide.style.WebkitTransitionProperty = property;
    slide.style.WebkitTransitionDuration = duration;
    slide.style.OTransitionProperty = property;
    slide.style.OTransitionDuration = duration;
    slide.style.marginTop = "-2000px";
    slide.style.opacity = 1;
    slide.style.display = "";
    animation = setInterval(function(){
        bodyHeight = document.body.scrollHeight;
        slideHeight = slide.clientHeight;
        marginTop = bodyHeight/2 - slideHeight/2;
        slide.style.marginTop = marginTop.toString()+'px';
        slide.style.opacity = 1;
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

var transitions_in = {
    "twister" : twisterIn,
    "zoomIn" : zoomIn,
    "fadeIn" : fadeIn,
    "fallIn" : fallIn,
}
