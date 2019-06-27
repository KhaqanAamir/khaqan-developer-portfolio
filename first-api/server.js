var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));


var ingredients = [
{ 
"id": "2323",
    "text": "eggs",
    },
    {
    "id" : "ddd",
    "text" : "Milk",
        },
    {
    "id" : "dk7u",
        "text" : "bacon"
        
        
    },
    {
    "id" : "757",
        "text": "frog legs"
    

    }
    
];
app.get ('/ingredients', function(req, res){
    res.send(ingredients); 
    
    
});
app.post('/ingredients', function(req, res){
var ingredient= req.body;
    if (!ingredient || ingredient=== ""){
        res.status(500).send({error:"Your ingredient must have some value"});
        
    }else{
        ingredients.push(ingredient);
        res.status(200).send(ingredients);
    }
    
    
});

app.put('/ingredients/:ingredientId', function(req, res){
   var newtext = req.body.text;
    if (!newtext || newtext=== ""){
    res.status(500).send({error:"You should provide a text"});    
        
    }
    else {
    for (var x= 0; x < ingredients.length; x++){
        var ing = ingredients[x];
        if (ing.id === req.params.ingredientId){
            ingredients[x].text= newtext;
            break;
            
        }
        
        
    }    
     res.send(ingredients);   
        
    }
    
    
    
    
});


app.listen(3000, function(){
    
console.log("First API running on port 3000! ");    
    
    
})