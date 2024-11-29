const {Sequelize} = require('sequelize')
const config = require('../config/config.js')
const pg = require("pg")

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const connectionString = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`


module.exports = {
    development:{
        url: connectionString,
        dialect: 'postgres',
        dialectModule: pg
    },
    production:{
        url: connectionString,
        dialect: 'postgres',
        dialectModule: pg
    }
}