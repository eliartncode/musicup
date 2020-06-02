//IMPORT EXTERNAL LIBS
const Sequelize = require('sequelize');
//IMPORT DATABASE CONNECTION
const connectionController = require('../util/connection');

const Account = connectionController.define('account', {
    id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name : { type: Sequelize.STRING, allowNull: false },
    last_name : { type: Sequelize.STRING, allowNull: false },
    email : { type: Sequelize.STRING, allowNull: false },
    password : { type: Sequelize.STRING, allowNull: false }
});

module.exports = Account;