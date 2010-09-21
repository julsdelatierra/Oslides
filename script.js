var actual;
var slides;
init = function(){
    var img = document.getElementsByTagName("img")[0];
    img.height = window.innerHeight-100;
    img.witdh = window.innerWidth-100;
    slides = document.getElementsByTagName("div");
    actual = 0;
}

keyDetect = function(key){
    if(key.keyCode == 37){
        slideLeft();
    }
    if(key.keyCode == 39){
        slideRight();
    }
}

slideRight = function(){
    if(actual<(slides.length-1) && actual>=0){
        slides[actual].style.display = "none";
        actual++;
        slides[actual].style.display = "";
    }
    else{
        slides[actual].style.display = "none";
        actual = 0;
        slides[actual].style.display = "";
    }
}

slideLeft = function(){
    if(actual<=(slides.length-1) && actual>0){
        slides[actual].style.display = "none";
        actual--;
        slides[actual].style.display = "";
    }
    else{
        slides[actual].style.display = "none";
        actual = (slides.length-1);
        slides[actual].style.display = "";
    }
}