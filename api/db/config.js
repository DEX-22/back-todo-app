const {Sequelize} = require('sequelize')
const config = require('../config/config.js')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const connectionString = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sqlize = new Sequelize(connectionString,{dialect:'postgres'})


module.exports = {
    development:{
        url: connectionString,
        dialect: 'postgres'
    },
    production:{
        url: connectionString,
        dialect: 'postgres'
    }
}