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
      // Suggestion to searching//
       $(document).ready(function(){
      // $(function() {  
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
        
      // Price Short //
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
 ///Image Slider //

$(document).ready(function() {
let images = ['images/image1.png','images/image2.png','images/image3.png','images/image4.png'];

let firstImage = 0;
 let lastImage = images.length -1;
 let currentImage = 0;

let nextBtn  = document.getElementById('next');
nextBtn.addEventListener('click',()=>{
     let imageTag = document.getElementById('image');
     currentImage++;
     if(currentImage>=lastImage) {
         currentImage = 3;
     }
     imageTag.src = images[currentImage];
});

//prev//
let preBtn  = document.getElementById('prev');
preBtn.addEventListener('click',()=>{
     let imageTag = document.getElementById('image');
     currentImage--;
     if(currentImage<=firstImage) {
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
});
});
   //Create List Of products with sub task //
  $(document).ready(function() {
    $('#pro').click(function() {
      var content = $('#addList').val();
      var category = 
          '<li>' + content + '</li>'; 
      $('#pro').append(category); 
  });
      $('#shirt').click(function() {
          var content = $('#addList').val();
          var category = 
              '<li>' + content + '</li>'; 
          $('#shirt').append(category); 
      });
       $('#trouser').click(function() {
          var content = $('#addList').val();
          var category = 
              '<li>' + content + '</li>'; 
          $('#trouser').append(category); 
      });
       $('#electronic').click(function() {
          var content = $('#addList').val();
          var category = 
              '<li>' + content + '</li>'; 
          $('#electronic').append(category); 
      });
       $('#mobile').click(function() {
          var content = $('#addList').val();
          var category = 
              '<li>' + content + '</li>'; 
          $('#mobile').append(category); 
      });
       $('#tab').click(function() {
          var content = $('#addList').val();
          var category = 
          '<li>' + content + '</li>';
          $('#tab').append(category);
       
      });
  });

 

    