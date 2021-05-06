$('.body').css('opacity', 0);
$('.body').animate({
    opacity: 1,
}, 500);
$('.burger').on('click', function () {
    $('body').toggleClass('show');
    $('.burger').toggleClass('open');
});
