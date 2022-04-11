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
      $(function() {
        cuenta = 0;
        txtArray = ["Car Details", "Smartphones are equipped with a QWERTY keypad."];
        setInterval(function() {
          cuenta++;
          $("#test").fadeOut(100, function() {
            $(this)
              .text(txtArray[cuenta % txtArray.length])
              .css('color', cuenta % 2 == 0 ? 'red' : 'blue')
              .fadeIn(100);
          });
        }, 3000);
      });
  
    