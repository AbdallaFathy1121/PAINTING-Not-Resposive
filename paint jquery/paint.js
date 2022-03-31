$(function (){

    // Smoth Scroll To .info

    $(".links a").click( function () {

        $("html, body").animate({

            scrollTop: $("#" + $(this).data("value") ).offset().top

        }, 1200);

    });

    $('.links a').click (function (){

        $(this).addClass("active").siblings().removeClass("active");

    });

    // Slider ( Testimonials )

    $('.test .item i').click (function(){

        if ( $(this).hasClass('one') ) {

            $(".test .info .one").addClass('active').fadeIn();

            $('.test .info .two').removeClass('active').fadeOut();
            $('.test .info .three').removeClass('active').fadeOut();
            $('.test .info .four').removeClass('active').fadeOut();

        } else if ( $(this).hasClass('two') ) {

            $(".test .info .two").addClass('active').fadeIn();

            $('.test .info .one').removeClass('active').fadeOut();
            $('.test .info .three').removeClass('active').fadeOut();
            $('.test .info .four').removeClass('active').fadeOut();

        } else if ( $(this).hasClass('three') ) {

            $(".test .info .three").addClass('active').fadeIn();

            $('.test .info .one').removeClass('active').fadeOut();
            $('.test .info .two').removeClass('active').fadeOut();
            $('.test .info .four').removeClass('active').fadeOut();

        } else if ( $(this).hasClass('four') ) {

                $(".test .info .four").addClass('active').fadeIn();

                $('.test .info .one').removeClass('active').fadeOut();
                $('.test .info .three').removeClass('active').fadeOut();
                $('.test .info .two').removeClass('active').fadeOut();            

        } else {}

    });

    $('.test .item .one').click(function(){

        $(this).addClass('active');

        $('.test .item .two').removeClass('active');
        $('.test .item .three').removeClass('active');
        $('.test .item .four').removeClass('active');

    });

    $('.test .item .two').click(function(){

        $(this).addClass('active');

        $('.test .item .one').removeClass('active');
        $('.test .item .three').removeClass('active');
        $('.test .item .four').removeClass('active');

    });

    $('.test .item .three').click(function(){

        $(this).addClass('active');

        $('.test .item .two').removeClass('active');
        $('.test .item .one').removeClass('active');
        $('.test .item .four').removeClass('active');

    });

    $('.test .item .four').click(function(){

        $(this).addClass('active');

        $('.test .item .two').removeClass('active');
        $('.test .item .three').removeClass('active');
        $('.test .item .one').removeClass('active');

    });

    // Button (Read More)

    $('.serv .one button').click(function(){

        $('.serv .one span').removeClass('hidden').fadeIn();

        $(this).addClass('hidden').fadeOut();

    });

    $('.serv .two button').click(function(){

        $('.serv .two span').removeClass('hidden').fadeIn();

        $(this).addClass('hidden').fadeOut();

    });

    $('.serv .three button').click(function(){

        $('.serv .three span').removeClass('hidden').fadeIn();

        $(this).addClass('hidden').fadeOut();

    });

    $('.serv .four button').click(function(){

        $('.serv .four span').removeClass('hidden').fadeIn();

        $(this).addClass('hidden').fadeOut();

    });

    $('.serv .five button').click(function(){

        $('.serv .five span').removeClass('hidden').fadeIn();

        $(this).addClass('hidden').fadeOut();

    });

    $('.serv .six button').click(function(){

        $('.serv .six span').removeClass('hidden').fadeIn();

        $(this).addClass('hidden').fadeOut();

    });

    // Read more (Projects)

    $('.pro button').click (function() {

        $('html, body').animate ({

            scrollTop: $('.about').offset().top

        }, 1200);

    });


    // ScrollTop (header)

    $('.fa-arrow-circle-up').click (function() {

        $('html, body').animate ({

            scrollTop: $('.header').offset().top

        }, 1200);

    });

    // button (Get started)

    $('.header .main .info button:first-of-type').click (function() {

        $('html, body').animate ({

            scrollTop: $('.pro').offset().top

        }, 1200);

    });

    // button (Learn More)

    $('.header .main .info button:last-of-type').click (function() {

        $('html, body').animate ({

            scrollTop: $('.serv').offset().top

        }, 1200);

    });


































});