var nodemailer = require('nodemailer');

module.export = function(){
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bublu5a@gmail.com',
    pass: 'usamaxx3'
  }
});

var mailOptions = {
  from: 'bublu5a@gmail.com',
  to: 'bublu5a@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
