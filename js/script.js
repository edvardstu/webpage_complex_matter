var i = 0;
var images2 = []; //array
var time = 24000; // time in millie seconds

//images

images2[0] = "url(./images/banner/banner1.jpg)";
images2[1] = "url(./images/banner/banner2.png)";
images2[2] = "url(./images/banner/banner3.png)";
images2[3] = "url(./images/banner/banner4.jpg)";
images2[4] = "url(./images/banner/banner5.png)";
images2[5] = "url(./images/banner/banner6.jpg)";
images2[6] = "url(./images/banner/banner7.png)";
images2[7] = "url(./images/banner/banner8.jpg)";
images2[8] = "url(./images/banner/banner9.jpg)";
images2[9] = "url(./images/banner/banner10.jpg)";
images2[10] = "url(./images/banner/banner11.jpg)";

//function


function changeImage() {
    var el = document.getElementById('banner');
    $('#banner').
                css({opacity: 0.3, backgroundImage: images2[i]}).
                fadeTo(1000, 1.0);

    if (i < images2.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}



window.onload = changeImage;
