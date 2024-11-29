const {Strategy,ExtractJwt} = require("passport-jwt")
const config = require('../config/config.js')


const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}



const JwtStrategy = new Strategy(options,
    async (payload,done)=>{
    return done(null,payload)

})

module.exports = JwtStrategy
