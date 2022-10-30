const { Sequelize } = require('sequelize');
const {db_name, db_user, db_pass, db_host, db_dialect, db_port} = require('../config');
const sequelize = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect: db_dialect,
    port: db_port
  });

// try {
// await sequelize.authenticate();
// console.log('Connection has been established successfully.');
// } catch (error) {
// console.error('Unable to connect to the database:', error);
// }

module.exports = sequelize;