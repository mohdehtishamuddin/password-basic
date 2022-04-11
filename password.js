$(document).ready(function(){
    $('#cpwd').keyup(function(){
        var pwd = $('#pwd').val();
        var cpwd =$('#cpwd').val();
        if(cpwd!=pwd){
            $('#Errorcpwd').html('**Password are not matching');
            $('#Errorcpwd').css('color','red');
            return false;
        }
        else{
            $('#Errorcpwd').html('');
            return true;
            console.log(cpwd);
        }
    });
});