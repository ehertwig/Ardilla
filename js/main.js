$(document).ready(function(){

    $('.image-box').click(function(){
       $(this).find('.lightbox').css('display','block');
       $('.backdrop').css({'display':'block', 'opacity':'.6'});
       $('.lightbox').animate({'opacity':'1.0'}, 400, 'linear');
    });
    
    $('.backdrop').click(closeBox);
    
    $('.close').click(function(){
        closeBox();
    });
    
    function closeBox(){
        $('.lightbox, .backdrop').animate({'opacity': '0'}, 300, 'linear', function(){
          $('.lightbox, .backdrop').css('display','none');
         });
    }
    
    
});