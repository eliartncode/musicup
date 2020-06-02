const Sequelize = require('sequelize');

const connection = new Sequelize(
    'sql7345015', //The name of the database
    'sql7345015', //The username
    'j6bCmaN6QG', //The password
    {
        dialect: 'mysql',
        host: 'sql7.freemysqlhosting.net'
    }
);

module.exports = connection;