$(document).ready(function(){
    $('.form-button').click(function(){
      if($('.form-name').match(/[0-9]+/)) {
        $('.alert').css('display','block');
      }
    });
});