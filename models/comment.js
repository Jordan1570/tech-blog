const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt');

class Comment extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Comment.init(
  {
    id: { // will reference post id
    },
    username: { // will reference the person who commented
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;