$('.hiring_items> div').on('click', function(){
    $(this).children ('.hiring_icon') .toggleClass('hiring-rotate-icon')
    $(this).next('.hiring_items-text').slideToggle(300);
    $(this).parent('.hiring_items') .toggleClass('change_color')
   
})

$('.features_items> div').on('click', function(){
    $(this).next('.features_items-text').slideToggle(300);
    $(this).parent('.features_items') .toggleClass('change_color--feauters')
   
})


