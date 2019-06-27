$(document).ready(function(){

  $('#submit').click (function(){

      var email1 = $("#Email").val();
      var password = $("#Password").val();
      var address1 = $("#Address1").val();
      var address2 = $("#Address2").val();
      var city = $("#City").val();

      alert(email1);


      $.ajax({

        type: 'POST',
        data: {email1,password, address1, address2, city}

        url: '/home/'+email1+password,
        success : function(data){
          window.location.href = data.redirect;
        }

      });





  });
});
