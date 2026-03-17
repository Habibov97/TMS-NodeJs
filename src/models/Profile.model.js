const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fatherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  entryScore: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  educationStatus: {
    type: DataTypes.ENUM,
    values: ['stateFunded', 'selfFunded'],
    defaultValue: 'selfFunded',
  },
  lastEntryIp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastEntryDate: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

module.exports = Profile;
