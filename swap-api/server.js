    var express = require('express');
var app = express();
var bodyparser = require ('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');

var Product = require('./models/product');
var WishLists = require('./models/wishlist');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({exteded: false}));


app.post('/product', function(req, res){
var product = new Product();
product.title = req.body.title;
product.price = req.body.price;
product.likes =0;    
product.save(function(err, savedProduct){
if (err){
res.status(500).send({err:"error pleae"});    
    
}
    else {
    res.send(savedProduct);    
        
    }
  });     
    
});
app.get('/product', function(req, res){
    Product.find({}, function(err, products){
    if (err){
    res.status(500).send({err: "issue"});
        
        
    }
        else {
        res.send(products);    
            
        }
        
        
    })    
});
app.get('/wishlist', function(req, res){
    WishLists.find({}, function(err, wishlist){
        res.send(wishlist);          
                  
                  
                  });
    
    
    
});
app.post('/wishlist', function(req, res){
var wishlist =  new WishLists();
wishlist.title = req.body.title;

    wishlist.save(function(err, savedwishlist) {
    if(err){
        res.status(500).send({error: "error"});
    } 
    else{
            
            res.send(savedwishlist);
            
        }
        
        
    });
    
    
});
app.put('/product/add', function(req, res){
Product.findOne({_id: req.body.productId}, function(err, product){
if (err){
    res.status(500).send({err: "error here"});
    
}
    else{
    WishLists.update({_id: req.body.wishlistId}, {$addToset: {product: product._id}}, function(err, wishlist){
        
        if(err){
        res.status(500).send({err: "error"});
    } 
        else {
            res.send(wishlist);
        }
        
    });    
        
    }
    
    
    
});    
    
    
    
    
})



app.listen(3000, function(){
    
console.log("running");    
    
});

