const { DataTypes } = require('sequelize');
const db = require('../config/db_config');

const userModel = db.define('user_table', {
    uid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, { freezeTableName: true, timestamps: false })

module.exports = userModel;