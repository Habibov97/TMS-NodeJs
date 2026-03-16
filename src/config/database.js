const { Sequelize } = require('sequelize');
const config = require('.');

const sequelize = new Sequelize(config.databaseURL, {
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync({ alter: true });

module.exports = sequelize;
