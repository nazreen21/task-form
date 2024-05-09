const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('contactdb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
