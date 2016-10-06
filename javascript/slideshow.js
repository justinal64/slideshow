"use strict";

// 1. Use JQuery AJAX to get your images from an external API. Try NASA's Astronomy Picture of the Day API or find your own.
// 2. Allow the user to change the animation from fade in/out to slide in/out.
// 3. Have captions only appear on hover.
var $slideshow = $('#slideshow');
var $slideShowBtn = $('#slideshowbtn');
var counter = 0;
var isRunning = false;
var fade;
var slide;
var captionH = ["IMAGE #1", "IMAGE #2", "IMAGE #3", "IMAGE #4",];
var captionP = ["Caption #1", "Caption #2", "Caption #3", "Caption #4",];

// ajax call to an external source
// $.get( "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", function( nasa ) {
//   console.log( "nasa Loaded: " , images = nasa.hdurl );
// });

// display image
function displayImg(imgNum) {
    // checking if box is checked
    var isChecked = $('#slidein')[0];
    if(isChecked.checked) {
        $slideshow.hide("slide", { direction: "right" }, 1500, function() {
        $slideshow.attr('src', `img/code${imgNum}.jpeg`);
        $('#caption-header').html(captionH[imgNum]);
        $('#caption-para').html(captionP[imgNum]);
        });
        $slideshow.show("slide", { direction: "left" }, 1500);
    } else {
        $slideshow.fadeOut("slow", function() {
            $slideshow.attr('src', `img/code${imgNum}.jpeg`);
            $('#caption-header').html(captionH[imgNum]);
            $('#caption-para').html(captionP[imgNum]);
        });
        $slideshow.fadeIn("slow");
    }
}


// AUTO SLIDE
function auto(){
fade = setInterval(function() {
        if(counter === 3) {
            counter = 0;
        } else {
            counter++;
        }
        displayImg(counter);
        isRunning = true;
        // reset counter
   }, 2000);
}

// When SlideShow Button is clicked it auto plays
$slideShowBtn.click(function() {
    if(!isRunning) {
        $slideShowBtn.val("Stop SlideShow");
        auto(); // start auto slide
    } else {
        // stop slideshow
        clearInterval(fade);
        isRunning = false;
        $slideShowBtn.val("Start SlideShow");
    }
});

// Event listeners
// prev and next also stop the slideshow if it is running
$('#prev').click(function() {
    if(counter === 0) {
        counter = 3;
    } else {
        counter--;
    }
    // Stops the function auto from running
    clearInterval(fade);
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
    clearInterval(fade);
    $slideShowBtn.val("Start SlideShow");
    displayImg(counter);
});

