const {Model,DataTypes,Sequelize} = require('sequelize')

const TASK_TABLE = "tasks"

const TaskSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title:{
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
    }, 
    description:{
        type: DataTypes.TEXT,
    },
    status:{
        allowNull: false,
        type: DataTypes.ENUM('pending','in process','complete')
    }, 
    createdAt:{
        allowNull: false,
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt:{
        field: 'updated_at',
        type: DataTypes.DATE, 
        defaultValue: Sequelize.NOW
    }
}


class Task extends Model{
    static associate(){}
    static config(sequelize){
        return {
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Task',
            timestamps: false
        }
    }
}

module.exports = { Task,TaskSchema, TASK_TABLE}