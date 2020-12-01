var i = 0;
var images2 = []; //array
var time = 4000; // time in millie seconds

//images

images2[0] = "url(./images/banner1.jpg)";
images2[1] = "url(./images/banner2.jpg)";
images2[2] = "url(./images/banner3.jpg)";
images2[3] = "url(./images/banner4.jpg)";
//function


function changeImage() {
    var el = document.getElementById('banner');
    $('#banner').
                css({opacity: 0.8, backgroundImage: images2[i]}).
                fadeTo(1000, 1.0);

    if (i < images2.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}



window.onload = changeImage;
