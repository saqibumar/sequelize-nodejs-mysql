const cors = require('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(bodyParser.json()); 
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
  next();
});


const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true, logging: console.log}).then(() => {
  console.log('Drop and Resync with { force: true }');
  const Gender = db.genders;
  Gender.bulkCreate(
		[{ name: "Male" },
		{ name: "Female" }])
		.then(() => {
			console.log('>>>>>>>>>>>>>>>>DONE');
		});

});

require('./app/route/user.route.js')(app);


// Create a Server
const PORT = process.env.PORT || 3001;
var server = app.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
})