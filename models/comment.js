const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
  {
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commenter_id: {
        type:DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        },
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        },
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