var Sequelize = require('sequelize');

var sequelize = module.exports = new Sequelize('mysql://root:root@localhost:3306/mirthdb');

var usercredentials   =  sequelize.define('usercredentials',{
  idNumber:{
    type:Sequelize.INTEGER,
    primarykey:true
  },
  username:Sequelize.STRING,
  password:Sequelize.STRING
},
{
  timestamps:false,
  freezeTableName:true
}
)
