var path = require('path');
var Sequelize = require('sequelize')

var sequelize = new Sequelize("mysql://root:root@localhost:3306/mirthdb");

var sftpdetails = module.exports = sequelize.define('sftp_details',{
    idNumber:{
      type:Sequelize.INTEGER,
      primarykey:true
    },
    outboundName:Sequelize.STRING,
    username:Sequelize.STRING,
    hostname:Sequelize.STRING,
    password:Sequelize.STRING,
    port:Sequelize.INTEGER,
    file_protocal:Sequelize.STRING,
    folderpath:Sequelize.STRING,
    sent_time:Sequelize.INTEGER,
    isSent:Sequelize.STRING,
    clientname:Sequelize.STRING,
    carrier:Sequelize.STRING,
    employer:Sequelize.STRING,
    emailId:Sequelize.STRING,
    subject:Sequelize.STRING,
    isActiveGroup:Sequelize.STRING,
    emailsent:Sequelize.STRING,
    isMulti:Sequelize.STRING,
    preventemailallAgain:Sequelize.STRING,
    emailsent:Sequelize.STRING,
    emailsent_time:Sequelize.INTEGER,

  },{
    timestamps:false,
    freezeTableName:true

  })
