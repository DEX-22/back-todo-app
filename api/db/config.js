const {Sequelize} = require('sequelize')

require('dotenv').config()

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    jwtSecret: process.env.JWT_SECRET,
    connectionString: process.env.DB_CONNECTION_STRING
}


// const USER = encodeURIComponent(config.dbUser)
// const PASSWORD = encodeURIComponent(config.dbPassword)
const connectionString = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`
 

module.exports = {
    development:{
        url: connectionString,
        dialect: 'postgres'
    },
    production:{
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbName,
        host: config.dbHost, 
        port: config.dbPort  ,
        dialect: 'postgres'
    }
}