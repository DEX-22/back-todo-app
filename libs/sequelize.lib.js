const {Sequelize}= require('sequelize')
const setupModels = require('../db/models/index.model.js')
const config = require('../config/config.js')
const pg = require("pg")

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const connectionString = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sqlize = new Sequelize(connectionString,
    {dialect:'postgres',
    dialectOptions: {
            module:  pg,
        timezone: '+05:00' // Peru
        }
    })

setupModels(sqlize)

module.exports = sqlize