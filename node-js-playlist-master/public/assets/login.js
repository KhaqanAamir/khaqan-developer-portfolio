$(document).ready(function(){

  $('#submit').click (function(){

      var email1 = $("#email").val();
      alert(email1);


      $.ajax({

        type: 'POST',
        data: email1,

      
        success : function(data){
          alert("success");




        }

      });
});
});
