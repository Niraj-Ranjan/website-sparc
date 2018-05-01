$(document).ready(function () {


    var tiltIntroHead = $('#intro-head').tilt({
        glare: true,
        maxTilt: 5
        //disableAxis: "y"
    });

    var tiltBanner1 = $('#banner-1').tilt({
        maxTilt: 3,
        disableAxis: "y"
    });
});

//var scene = document.getElementById('scene');
//var parallaxInstance = new Parallax(scene);
