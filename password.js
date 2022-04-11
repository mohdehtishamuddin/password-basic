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
 $(document).ready(function () {
        $("#odd").click(function () {
          $("table tr:odd").css({
            "background-color": "#00e673",
            color: "white",
          });
        });
        $("#even").click(function () {
          $("table tr:even").css({
            "background-color": "#b3b3cc",
            color: "white",
          });
        });
      });