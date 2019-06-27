 var mongoose = require('mongoose');
var schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var wishlist = new schema({
title : String,
products: [{type: ObjectId, ref: 'product'}]    
    
    
    
});

module.exports = mongoose.model('WishList', wishlist);
