const { models } = require('../libs/sequelize.lib.js')
const boom = require('@hapi/boom')
const bcrypt = require("bcrypt")

class UserService {

    async create(data) { 
        const saltOrRounds = 10
        const password = await bcrypt.hash(data.password,saltOrRounds)
        const newUser = await models.User.create({...data,password})
        
        delete newUser.dataValues.password
        delete newUser.dataValues.id

        return newUser
    }
 
    async findByEmail(email) {
        try {

            const user = await models.User.findOne({where: {email}})
 
            return user
        } catch (e) {
            throw boom.conflict(e)
        }
    } 
 
}

module.exports = UserService