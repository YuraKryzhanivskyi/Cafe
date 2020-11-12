
//document.body.onload = function () {
//    setTimeout(function () {
//        let preloader = document.getElementById('pagePreloader');
//        if (!preloader.classList.contains('_done')) {
//            preloader.classList.add('_done');
//        }
//    }, 200);
//};

$(document).ready(function () {

    $('.menu-slider').slick({
        dots: true,
        //adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        easing: 'ease',
        infinite: false,
        responsive: [
            {
                breakpoint: 1186,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            },
        ]

    });

    //---------------------------------burger----------------------------------
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('_active');
        $('body').toggleClass('_lock');
    });

    //---------------------------------burger----------------------------------
    $('.tabs-triggers__item').click(function (e) {
        e.preventDefault();

        $('.tabs-triggers__item').removeClass('_active');
        $('.tabs-content__item').removeClass('_active');

        $(this).addClass('_active');
        $($(this).attr('href')).addClass('_active');
    });

    $('.tabs-triggers__item:first').click();

    //--------------------------------- svg to from IGM to inline svg----------------------------------
    $('img.img-svg').each(function () {
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            var $svg = $(data).find('svg');
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });



    //---------------------------------phone-mask----------------------------------
    //$("#phone").inputmask({ "mask": "+380 (99) 999-99-99" }); //specifying options


});