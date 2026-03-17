const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    graduationStatus: {
      type: DataTypes.ENUM,
      values: ['graduated', 'inProgress', 'suspended'],
    },
    role: {
      type: DataTypes.ENUM,
      values: ['admin', 'student', 'teacher'],
      allowNull: false,
      defaultValue: 'student',
    },
  },
  { timestamps: true },
);

module.exports = User;
