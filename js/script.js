// import simpleParallax from 'simple-parallax-js';

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 5000,
        },
        simulateTouch: false,
    });
    var mySwiper = new Swiper('.swiper-container2', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 5000,
        },
        simulateTouch: false,
    });
    var mySwiper = new Swiper('.swiper-container3', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        zoom: true,
        // autoplay: {
        //     delay: 5000,
        // },
        //simulateTouch: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $('.imgbgr').each(
        function () {
            b = ($(this).attr('src'));
            // console.log(b);
            $(this).parent().css({ background: 'url(' + b + ')' + 'center' + '/' + 'auto' });
            $(this).addClass('del');
            $('.del').css('display', 'none');
        }
    );

    $('.menu__link').click(function () {
        $('.menu__link').removeClass('active');
        $(this).toggleClass('active');
    })

    $(window).on('load resize', function () {
        var b = $(window).outerWidth();
        var c = $('.swiper-container2').outerWidth();
        var a = b / 2 - 250 - c;
        a = Math.floor(a);
        if (a > 0) {
            $('.swiper-container2').css('left', a + 'px');
        }
    })

    $('.background').each(function () {
        var $bgobj = $(this);
        $(window).scroll(function () {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
            var coords = 'center' + ' ' + yPos + 'px';
            console.log(coords);
            $bgobj.css({ 'backgroundPosition': coords });
        });
    });
    var count = 0;
    $(window).on('load resize', function () {
        var winwidth = $(window).width();
        if (winwidth <= 1140 && count == 0) {
            $('.header-body').append('<div class="newmenu"></div>');
            $('.text-header__menu').detach().prependTo('div.newmenu');
            count = 1;
        }
        if (winwidth > 1140 && count == 1) {
            $('div.newmenu nav').detach().appendTo('.text-header');
            $('div.newmenu').remove();
            count = 0;
        }
        $(window).on('scroll', function () {
            $('div.newmenu').css('position', 'fixed')
            var scroool = $(window).scrollTop();
            console.log(scroool);
            if (scroool <= 150) {
                $('div.newmenu').css({ 'position': 'relative', 'background-color': '', 'border': '' })
            }
            else {
                $('div.newmenu').css({ 'background-color': '#d5a129', 'border': '2px #787132 solid' })
            }
        })
    })

    $('.burger').click(function () {
        $(this).toggleClass('click');
        $('.burger-menu').toggleClass('active1');
        $('.text-header__menu').detach().prependTo('.burger-menu')
    })
    $(window).on('load resize', function () {
        var $realSize = $(window).width();
        if ($realSize > 850 && $realSize < 1140) {
            $('.text-header__menu').detach().prependTo('.newmenu');
        }
    })
})
