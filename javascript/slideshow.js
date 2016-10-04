"use strict";
var $slideshow = $('#slideshow');
var $slideShowBtn = $('#slideshowbtn');
var counter = 0;
var isRunning = false;
var intv;

var caption = ["Caption #0", "Caption #1", "Caption #2", "Caption #3",];
// display image
function displayImg(imgNum) {
    $slideshow.fadeOut("slow", function() {
        $slideshow.attr('src', `img/code${imgNum}.jpg`);
        $('#caption').html(caption[imgNum]);
    });
    $slideshow.fadeIn("slow");
}

// AUTO SLIDE
function auto(){
intv = setInterval(function() {
        if(counter === 3) {
            counter = 0;
        } else {
            counter++;
        }
        displayImg(counter);
        console.log("counter", counter);
        isRunning = true;
        // reset counter
   }, 2000 );
}

// When SlideShow Button is clicked it auto plays
$slideShowBtn.click(function() {
    if(!isRunning) {
        $slideShowBtn.val("Stop SlideShow");
        auto(); // start auto slide
    } else {
        // stop slideshow
        clearInterval(intv);
        isRunning = false;
        $slideShowBtn.val("Start SlideShow");
    }
});


// prev and next also stop the slideshow if it is running
$('#prev').click(function() {
    if(counter === 0) {
        counter = 3;
    } else {
        counter--;
    }
    // Stops the function auto from running
    clearInterval(intv);
    $slideShowBtn.val("Start SlideShow");
    displayImg(counter);
});

$('#next').click(function(e) {
    if(counter === 3) {
        counter = 0;
    } else {
        counter++;
    }
    // Stops the function auto from running
    clearInterval(intv);
    $slideShowBtn.val("Start SlideShow");
    displayImg(counter);
});