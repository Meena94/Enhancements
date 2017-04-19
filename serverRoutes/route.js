var path = require('path');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var session = require('express-session')

var sequelize = new Sequelize('mysql://root:root@localhost:3306/mirthdb');


var usercredentials = require('../models/usercredentials');
var sftpdetails = require('../models/sftpdetails');
module.exports = function(app){

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(session({
    secret:'dsfhsfiudsfuy@5378s09s',
    resave:false,
    saveUninitialized:true
  }))

app.get('/loginsession',function (req,res) {
  req.session.destroy(function (err) {
    // cannot access session here
    var path = "/login";
    res.send(path) ;
  })
})

  // for validating the user
  app.post('/login', function (req,res) {
      console.log('trying to login');
      var user = req.body.username;
      var pwd = req.body.password;
      session = req.session;
      var q1 = "SELECT  password FROM usercredentials where username =  " + "'" + user + "'";//+username;
       sequelize.query( q1 ,{ type: sequelize.QueryTypes.SELECT} ).then(function (data) {

         if (data == "") {
           var error = "Username or Password is wrong";
           res.send(error) ;
         }
         else {
           if( pwd === data[0]['password']){
             session.user = req.body.username;
             //console.log('valid user');
             //console.log(session.user);
             if (session.user) {
               var path = "/home";
               res.send(path) ;
             }
             else {
               var error = "Unauthorized Access";
               res.send(error) ;
             }

           }
           else {
             var error = "Username or Password is wrong";
             res.send(error) ;
           }
         }
       })

  })

  app.get('/homegrid',function (req,res) {
    session = req.session;
    if (session.user) {
      console.log(session.user);
      var gridcounts = {};
    sequelize.query('SELECT * FROM sftp_details where isActiveGroup = "Y"',{ type: sequelize.QueryTypes.SELECT}).then(function (data) {
      //res.json(data);
      //console.log(data);
    var activecount = Object.keys(data).length;

      gridcounts.activecount=activecount;
      sequelize.query('SELECT * FROM sftp_details where isSent = "Y"',{ type: sequelize.QueryTypes.SELECT}).then(function (data) {
        //res.json(data);
        //console.log(data);
        var sftpcount = Object.keys(data).length;
        gridcounts.sftpcount=sftpcount;
          //console.log(gridcounts);
          res.send(gridcounts);
    })

    })
    }
    else {
      var path = "/login";
      res.send(path) ;
    }

  })


// to get  SFTP sent groups detailos from SFTP_details table
  app.get('/getSftpGroupHome',function (req,res) {
    session = req.session;
    if(session.user){
      sequelize.query('SELECT carrier, employer, outboundName, hostname, username, folderpath, emailId, isSent, isActiveGroup, isMulti, preventemailallAgain, emailsent FROM sftp_details where ( isActiveGroup = "Y" and isSent = "Y")',{ type: sequelize.QueryTypes.SELECT}).then(function (data) {
        //console.log(data);
        res.json(data);
      })
    }
    else {
      var path = "/login";
      res.send(path) ;
    }
  })
  // to get  SFTP sent groups detailos from SFTP_details table
  app.get('/getNotSentSftpGroups',function (req,res) {
    session = req.session;
    if(session.user){
      sequelize.query('SELECT carrier, employer, outboundName, hostname, username, folderpath, emailId, isSent, isActiveGroup, isMulti, preventemailallAgain, emailsent FROM sftp_details where ( isActiveGroup = "Y" and isSent = "N")',{ type: sequelize.QueryTypes.SELECT}).then(function (data) {
        //console.log(data);
        res.json(data);
      })
    }
    else {
      var path = "/login";
      res.send(path) ;
    }
  })

// to insert new SFTP detail row into SFTP_details table
  app.post('/addNewGroupDetails',function (req,res) {

    session = req.session;
    if(session.user){
      var insertdata = req.body;
      //console.log(insertdata);//protocol issent isActive preventemail
      var q1 = "insert into sftp_details (outboundName,username,hostname,password,port,folderpath,isSent,carrier,employer,emailId,subject,file_protocal,isActiveGroup,isMulti) values ( " +"'" + insertdata.outbound + "'" + "," + "'" + insertdata.user + "'" + "," + "'" + insertdata.host + "'" + "," + "'" + insertdata.pwd + "'" + "," + "'" + insertdata.port + "'" + "," + "'" + insertdata.folder + "'" + "," + "'" + insertdata.issent + "'" + "," + "'" + insertdata.carrier + "'" + "," + "'" + insertdata.employer + "'" + ","+ "'" + insertdata.email + "'" + "," + "'" + insertdata.sub + "'" + "," + "'" + insertdata.protocol + "'" + "," + "'" + insertdata.isActive + "'" + "," + "'" + insertdata.ismulti + "'" + ")";
       sequelize.query( q1 ,{ type: sequelize.QueryTypes.INSERT}).then(function (data) {
       console.log('successfully inserted');
      //   res.json(data);
      })

      //res.json(insertdata);
    }
    else {
      var path = "/login";
      res.send(path) ;
    }
  })


  app.get('/logout',function (req,res) {
    //session = req.session;
    req.session.destroy(function(err) {
     // cannot access session here
     var path = "/login";
     res.send(path) ;
  })
  })

}
