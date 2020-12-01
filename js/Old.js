

$(window).load(function(){
$('img.bgfade').hide();
var dg_H = $(window).height();
var dg_W = $(window).width();
$('#wrap').css({'height':dg_H,'width':dg_W});
function anim() {
    $("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(1500);
    $("#wrap img").first().fadeIn(1500);
    setTimeout(anim, 3000);
}
anim();})
$(window).resize(function(){window.location.href=window.location.href});

$(function() {
$('#slideshow img:gt(0)').hide();
setInterval(function() {
$('#slideshow :first-child')
.fadeOut(1000)
.next('img')
.fadeIn(1000)
.end()
.appendTo('#slideshow');
}, 4000);
});

var images = ['http://lorempixel.com/500/500/nature/4', 'http://lorempixel.com/500/500/nature/2', 'http://lorempixel.com/500/500/nature/3'];

var index  = 0;
var $top   = $('#top-area');



setInterval(function() {
   $top.animate({ opacity: 0 }, 500, function() {
     $top.css('background-image', 'url('+images[++index]+')');
     $top.animate({ opacity: 1 }, 500, function() {
       if(index === images.length) index = 0;
     });
   });
}, 6000);

//Initializing
var i = 0;
var images2 = []; //array
var time = 3000; // time in millie seconds

//images

images2[0] = "url(./images/pic01.jpg)";
images2[1] = "url(./images/pic02.jpg)";
images2[2] = "url(http://lorempixel.com/500/500/nature/4)";
//function

function changeImage() {
    var el = document.getElementById('banner');
    el.style.backgroundImage = images2[i];
    if (i < images2.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;
