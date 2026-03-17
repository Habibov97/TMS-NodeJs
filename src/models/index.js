const User = require('./User.model');
const Profile = require('./Profile.model');

User.hasOne(Profile);
Profile.belongsTo(User);

module.exports = {
  User,
};
