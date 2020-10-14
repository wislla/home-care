const Sequelize = require ('sequelize');
const dbConfig = require('./../config/database');
const Collect = require ('./../models/Collect')

const connection = new Sequelize(dbConfig);
Collect.init(connection);

module.exports = connection;