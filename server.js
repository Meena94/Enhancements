var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var helmet = require('helmet');
var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session);

var app = express();
app.set('trust proxy', 1);
app.use(helmet());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'home')));

routes = require('./serverRoutes/route')(app);
routes = require('./serverRoutes/route')(app);
 // usercredentials = require("./models/usercredentials")
// app.get('/',function (req, res) {
//   res.sendFile('index.html');
// })


app.all("/*", function(req, res, next) {
          res.sendFile("/index.html", { root: __dirname + "/home" });
});

var PORT = process.env.PORT || 3000 ;
app.listen(PORT , function () {
  console.log('server is is running on port '+ PORT);

})
