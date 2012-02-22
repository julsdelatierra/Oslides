var twisterIn = function(slide){
    startPoint = "scale(0) rotate(5deg)";
    incoming = "scale(1) rotate(360deg)";
    slide.style.MozTransform = startPoint;
    slide.style.WebkitTransform = startPoint;
    slide.style.OTransform = startPoint;
    slide.style.display = "";
    setInterval(function(){
        slide.style.MozTransform = incoming;
        slide.style.WebkitTransform = incoming;
        slide.style.OTransform = incoming;
    },500);
};

var zoomIn = function(slide){
    startPoint = "scale(0) rotate(0deg)";
    incoming = "scale(1) rotate(0deg)";
    slide.style.MozTransform = startPoint;
    slide.style.WebkitTransform = startPoint;
    slide.style.OTransform = startPoint;
    slide.style.display = "";
    setInterval(function(){
        slide.style.MozTransform = incoming;
        slide.style.WebkitTransform = incoming;
        slide.style.OTransform = incoming;
    },500);
}

var transitions_in = {
    "twister" : twisterIn,
    "zoomIn" : zoomIn,
}
