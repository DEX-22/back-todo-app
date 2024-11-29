const boom = require("@hapi/boom")

function autorizationHandler(req,res,next){

    const apiKey = req.headers['api_key']
console.log("asd")
    if(apiKey == "123"){
        next()
    }else{
        next(boom.unauthorized())

    }

}


module.exports = autorizationHandler