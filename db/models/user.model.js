const {Model,DataTypes,Sequelize} = require('sequelize')

const USER_TABLE = 'users'

const UserSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName:{
        allowNull: false,
        field: 'last_name',
        type: DataTypes.STRING
    },
    email:{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    password:{
        allowNull: false,
        type: DataTypes.STRING
    },
    created_at:{
        allowNull: false,
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class User extends Model {
    static associate(){}
    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports= {USER_TABLE,UserSchema,User} 