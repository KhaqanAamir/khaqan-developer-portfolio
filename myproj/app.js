import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './model/issue';
const app = express();

const router = express.Router();
app.use(cors);
app.use (bodyparser.json());
mongoose.connect ('mongodb://localhost:27017/issues')   ;

const connection = mongoose.connection;

connection.once ('open', ()=> {
console.log("database is connected");


});
app.get("/ordernow/lead", function (req, res){

  var issue = new Issue (req.body);
  issue.save().then(issue => {
res.json(200).json({'issue': 'added Successfully'});


  })
  .catch(err=>{
res.status(400).json({'issue': 'added Successfully'});

});

});
router.route('/login').get((req, res)=>{
Issue.findBy({email: {req.body.email}, password: {req.body.password}}, (err, issue) =>{
if (err) throw err;

else{
res.json(issue);

}

});


});

router.route ('userportal/:email').post((req, res)=> {



});
router.route ('issues/update/:id', (req, res)=> {
Issue.findById(req.params.id, (err, issue)=> {
if (!issue){
return next(new Error ('could not load document'));

}
else {
  issue.title = req.body.title;
  issue.responsible= req.body.responsible;
issue.description = req.body.description;
issue.serverity = req.body.serverity;
issue.status = req.body.status;

issue.save().then(issue=>{
      res.json("update complete");

}).catch(err =>{
  res.status(400).send("update fail");
})
}


});

});



app.get('/', router);


app.listen (4000, () => console.log("port 4000 running"));
