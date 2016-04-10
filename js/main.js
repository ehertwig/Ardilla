document.ready(function(){
    if($('.form-name').match(/^[a-z]+/i)) {
        $('.').text('Name field must contain only letters.');
    }
});