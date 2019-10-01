$(document).ready(() => {

    new WOW().init();

    var intro = $("#intro .non-typewriter p").tilt();

    var aboutme = $("#aboutme .non-typewriter p").tilt();


    var options = {
        strings: ["Aspiring Web Developer", "Aspiring NodeJS Developer", "Aspiring Backend Developer"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 50,
        showCursor: false,
        loop: true
    };

    var typed = new Typed(".namecenter h1", options);

    VANTA.NET({
        el: ".background",
        color: 0xffffff,
        backgroundColor: 0x0,
        points: 7.00,
        maxDistance: 10.00,
        spacing: 17.00
    })

    $(".openbtn").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(".sidepanel").height() > 0) {
            hideNav();
        } else {
            $(".sidepanel").css('height', '100vh');
            $(this).addClass('open')
        }
    })

    $(".sidepanel").click(function(e) {
        e.stopPropagation();
    })

    $(document).click(function() {
        hideNav();
    })

    $(".sidepanel .closebtn").click(function() {
        hideNav();
    })

    function hideNav() {
        $(".sidepanel").css('height', '0px');
        $(".openbtn").removeClass('open')
    }

    $(".sidepanel .aboutme").click(function() {
        $("#intro").fadeOut(1000, function() {
            $("#aboutme").fadeIn(1000);
        });
    })

    $("#aboutme .goback").click(function(e) {
        e.stopPropagation();
        $("#aboutme").fadeOut(1000, function() {
            $("#intro").fadeIn(1000);
        })
    })

})