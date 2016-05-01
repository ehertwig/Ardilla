$(document).ready(function(){
    
    $('.image-box-maddy').click(function(){
       $('.maddy-lightbox, .backdrop').css('display','block');
        $('.maddy-lightbox').animate({'opacity':'1.0'}, 300, 'linear');
       $('.backdrop').css('opacity', '.75');
    });
    
    $('.backdrop').click(function(){
        closeBox();
    });
    
    $('.close').click(function(){
        closeBox();
    });
    
    function closeBox(){
        $('.maddy-lightbox, .backdrop').animate({'opacity': '0'}, 300, 'linear', function(){
          $('.maddy-lightbox, .backdrop').css('display','none');
         });
    }
    
    $('.image-box-violeta').click(function(){
        $('.violeta-lightbox, .backdrop').css('display','block');
        $('.violeta-lightbox').animate({'opacity':'1.0'}, 300, 'linear');
       $('.backdrop').css('opacity', '.75');
    });
    
    
    function closeBox(){
        $('.violeta-lightbox, .backdrop').animate({'opacity': '0'}, 300, 'linear', function(){
          $('.violeta-lightbox, .backdrop').css('display','none');
         });
    }
});