$(window).on('scroll', function(){
    if($(this).scrollTop()  > 500){
        $('#up').fadeIn()
       
    } else{
        $('#up').fadeOut()
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 500)
})

$('#stone_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#stone').offset().top}, 1000)
})

$('#craft_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#craft').offset().top}, 1000)
})

$('#shopping_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#shopping').offset().top}, 1000)
})

$('#footer_link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000)
})
