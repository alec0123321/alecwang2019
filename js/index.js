$(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0)
        $(".explore").addClass("at_top");
    else
        $(".explore").removeClass("at_top");
});


var s = skrollr.init();
if (s.isMobile()) {
    s.destroy();
}

screen.addEventListener("orientationchange", function () {
    console.log("The orientation of the screen is: " + screen.orientation);
});