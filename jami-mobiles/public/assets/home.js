$(document).ready(function(){

  $('#submit').click (function(){

      var email1 = $("#email").val();
      alert(email1);


      $.ajax({

        type: 'POST',
        data: email1,

        url: '/home/'+email1,
        success : function(data){
          window.location.href = data.redirect;




        }

      });
});
});
