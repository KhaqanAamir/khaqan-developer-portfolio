var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
 var resultf= document.getElementById('result');

var form= document.getElementById('xis');
form.addEventListener('submit', function(event){
    if (!num1.value || !num2.value )
{   
alert("Enter the value");

}
    else{
        var x=parseFloat( num1.value);
        var y=parseFloat( num2.value);
        
        var result = (x/y);
        var percentage = result * 100;
resultf.innerText= percentage;        
        event.preventDefault();
            
        
    }
    
    
})