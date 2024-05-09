const { DataTypes } = require("sequelize");
const sequelize = require('../db/db');

const Contact = sequelize.define('Contact', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    
});
// Contact.sync({force:true})

module.exports = Contact;
