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
      $('#form').submit(function(){
        if(!$("#form input[type=text]").val())
        {
          $("#form input[type=text]").addClass("empty");
          alert("please fill this field");
          return false;
        }
      });
      $(function() {  
        var Flowers = [  
          "Lily",  
          "Lotus",  
          "Tulip",  
          "Crocus",  
          "Hyacinth",  
          "Daisy",  
          "Dandelion",  
          "Orchid",  
          "Cherry blossom",  
          "Rose",  
          "Bluebell",  
          "Sunflower",  
          "Daffodil",    
        ];  
        $( "#flower" ).autocomplete({  
          source: Flowers  
          
        });  
      });  
      $(document).ready(function(){
        $("#page").change(()=>{
          var val = $("#page").val();
        $("#price").empty();
        if(val=="medium"){
          $("#price").append("1300")
        }
        else{
          $("#price").append("1000");
        }
      });
      $("#note").change(()=>{
        var val = $("#note").val();
        $("#t_price").empty();
        if(val=="lg"){
          $("#t_price").append("1200");
        }
        else{
          $("#t_price").append("1500");
        }
      });
      });
      $(document).ready(function(){
        $("#p1").mouseout(function(){
       // alert("click Me");
      })
      });

var slider_img = document.querySelector('.slider-img');
var images = ['a.jpg','b.jpg','c.jpg'];
var i =0;
function prev(){
  if(i<=0) i = images.length;
  i--;
  return setImg();
}
function next(){
  if(i>=images.length-1) i==-1;
  i++;
  return setImg();
}
function setImg(){
  return slider_img.setAttribute('src','images/'+images[i]);
};
$(document).ready(function() {
 
  $('#btn-add').click(function(){
      $('#select-from option:selected').each( function() {
              $('#select-to').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
          $(this).remove();
          console.log("append");
      });
  });
  $('#btn-remove').click(function(){
      $('#select-to option:selected').each( function() {
          $('#select-from').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
          $(this).remove();
      });
  });

});

    