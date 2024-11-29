const { TaskSchema,Task } = require("./task.model")
const { UserSchema,User } = require("./user.model")


module.exports = function(sequelize){
    Task.init(TaskSchema,Task.config(sequelize))
    User.init(UserSchema,User.config(sequelize))
} 