$(document).ready(() => {
    
    function toggleMenu() {
        if($(window).width() < 576) {
            $(".nav").hide();
        } else {
            $(".nav").show();
        }
    }
    toggleMenu();
    $(window).resize(toggleMenu);

    $(".toggle").click(function() {
        $(".nav").slideToggle();
    })
})