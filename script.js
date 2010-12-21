var actual;
var slides;

init = function(){
    var img = document.getElementsByTagName("img")[0];
    img.height = window.innerHeight-100;
    img.witdh = window.innerWidth-100;
    slides = document.querySelectorAll(".slide");
    actual = 0;
    slides[actual].style.MozTransform = "scale(1) rotate(360deg)";
    slides[actual].style.WebkitTransform = "scale(1) rotate(360deg)";
    slides[actual].style.OTransform = "scale(1) rotate(360deg)";
}

keyDetect = function(key){
    if(key.keyCode == 37){
        slideLeft();
    }
    if(key.keyCode == 39){
        slideRight();
    }
}

apper = function(){
    setInterval(function(){
        slides[actual].style.MozTransform = "scale(1) rotate(360deg)";
        slides[actual].style.WebkitTransform = "scale(1) rotate(360deg)";
        slides[actual].style.OTransform = "scale(1) rotate(360deg)";
    },500);
}

disapper = function(){
    slides[actual].style.MozTransform = "scale(0) rotate(10deg)";
    slides[actual].style.WebkitTransform = "scale(0) rotate(10deg)";
    slides[actual].style.OTransform = "scale(0) rotate(10deg)";
}

slideRight = function(){
    if(actual<(slides.length-1) && actual>=0){
        disapper();
        slides[actual].style.display = "none";
        actual++;
        slides[actual].style.display = "";
        apper();
    }
    else{
        disapper();
        slides[actual].style.display = "none";
        actual = 0;
        slides[actual].style.display = "";
        apper();
    }
}

slideLeft = function(){
    if(actual<=(slides.length-1) && actual>0){
        disapper();
        slides[actual].style.display = "none";
        actual--;
        slides[actual].style.display = "";
        apper();
    }
    else{
        disapper();
        slides[actual].style.display = "none";
        actual = (slides.length-1);
        slides[actual].style.display = "";
        apper();
    }
}
