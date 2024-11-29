const passport = require('passport')
const localStrategy = require("./local.strategy.js")
const JwtStrategy = require("./jwt.strategy.js")



module.exports = function (app){
    passport.use(localStrategy)
    passport.use(JwtStrategy)

    //app.use(passport.initialize());
}
