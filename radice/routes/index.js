var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

  console.log(req.body)

  var name = req.body.name;
  var surname = req.body.surname;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'sofimoscuzza@hotmail.com',
    subject: "Contacto desde la web",
    html: name + "" + surname + "se contacto y quiere mas info a este correo: " + email + mensaje + ".<br> Su tel es " + tel
}

  var transporter = nodemailer.createTranspoter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
})

var info = await transporter.sendMail(obj);

res.render('index', {
  message: 'Mensaje enviado correctamente',
});

});


module.exports = router;
