
$(".members-inp input")
    .on('focus', function () {
        $(".members-inp-dropdown").toggle();
    })
    .on('blur', function () {
        $(".members-inp-dropdown").toggle();        
    })

$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});

$(".std-modal .submit, .std-modal .cancel").on("click", function(){
    $.magnificPopup.close();
});