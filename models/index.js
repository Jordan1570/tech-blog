const User = require('./User');
const Comment = require('./Comment')
const Post = require('./Post')

//relationships

Post.belongsTo(User, {
    foreignKey: "userId"
})

module.exports = { User, Comment, Post };


