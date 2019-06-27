var rs = require('readline-sync');

var firstNum = rs.question('Please enter a number');
var secondNum = rs.question('Please enter anoter number');
var operator = rs.question('Please enter an operator');

if (operator==='*'){    
var x= parseFloat(firstNum.value);
    var y= parseFloat(secondNum.value);
var z= x+y;
    var v= parseFloat(z.value);
    console.log(z);
}
