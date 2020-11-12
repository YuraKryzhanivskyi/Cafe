//Adaptive function
$(window).resize(function (event) {
    adaptive_function();
});
function adaptive_header(w, h) {
    var headerMenu = $('.header__menu');
    var headerLang = $('.header__lang');

    if (w < 768) {
        if (!headerLang.hasClass('_done')) {
            headerLang.addClass('_done').appendTo(headerMenu);
        }
    } else {
        if (headerLang.hasClass('_done')) {
            headerLang.removeClass('_done').appendTo($('.header__body'));/*prependTo*/
        }
    }
}
function adaptive_function() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header(w, h);
}
adaptive_function();