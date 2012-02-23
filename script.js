var actual = 0;
var slides;

init = function(){
    slides = document.getElementsByTagName("section");
    appear();
}

keyDetect = function(key){
    if(key.keyCode == 37){
        slideLeft();
    }
    if(key.keyCode == 39){
        slideRight();
    }
}

appear = function(){
    slide = slides[actual];
    transition = transitions_in[slide.getAttribute("data-transition-in")];
    transition(slide);
    bodyHeight = document.body.scrollHeight;
    slideHeight = slides[actual].clientHeight;
    marginTop = bodyHeight/2 - slideHeight/2;
    slides[actual].style.marginTop = marginTop.toString()+'px';
    return;
}

disappear = function(){
    slide = slides[actual];
    return;
}

slideRight = function(){
    if(actual<(slides.length-1) && actual>=0){
        disappear();
        slides[actual].style.display = "none";
        actual++;
        slides[actual].style.display = "";
        appear();
    }
    else{
        disappear();
        slides[actual].style.display = "none";
        actual = 0;
        slides[actual].style.display = "";
        appear();
    }
}

slideLeft = function(){
    if(actual<=(slides.length-1) && actual>0){
        disappear();
        slides[actual].style.display = "none";
        actual--;
        slides[actual].style.display = "";
        appear();
    }
    else{
        disappear();
        slides[actual].style.display = "none";
        actual = (slides.length-1);
        slides[actual].style.display = "";
        appear();
    }
}
