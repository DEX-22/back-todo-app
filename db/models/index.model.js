const { TaskSchema,Task } = require("./task.model")


module.exports = function(sequelize){
    Task.init(TaskSchema,Task.config(sequelize))

} 