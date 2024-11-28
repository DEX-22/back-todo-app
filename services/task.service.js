
const { models } = require("../libs/sequelize.lib.js")

const boom = require("@hapi/boom")

class TaskService{
    PENDING = "pending"
    async create(body){
 
       try {
        const newTask = await models.Task.create({...body,status: this.PENDING})
        return newTask
       } catch (error) {
        throw new Error(error);
        
       }
    }
    async findAll(){
        try {
            const tasks = await models.Task.findAll()
            return tasks
        } catch (error) {
            throw new Error(error)
        }
    }

    async findOne(id){
        
        try {
            const task = await models.Task.findByPk(id)
        
            if(!task) throw boom.notFound("Task not found")

            return task
        } catch (error) {
            throw new Error(error)        
        }
    }
    async update(id,changes){
        const task = await this.findOne(id)
          
        try {
            const updated = await task.update({
                ...changes, updatedAt: new Date()
            })
    
            return updated
        } catch (error) {
            throw new Error(error)
        }
    }
    async delete(id){

        const task = await this.findOne(id)

        try {
            await task.destroy()
    
            return "Task deleted"
        } catch (error) {
            throw new Error(error)
        }
    }
}


module.exports = TaskService