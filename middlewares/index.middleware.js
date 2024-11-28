const boom = require('@hapi/boom')
const { ValidationError } = require('sequelize')


function validateRequest(schema,property){

    return (req,res,next)=>{
        const data = req[property]
        const {error} = schema.validate(data,{abortEarly:false})
 
        if(error)
            next(boom.badRequest(error))
        else
            next()
 
    }

}

function catchError(err,req,res,next){
    if(err){
        console.log(err)
        next(err)
    }else{

        next()
    } 
    
}

function boomErrorHandler(err,req,res,next){
    if(err.isBoom){
        const {output} = err
        res
        .status(output.statusCode)
        .json(output.payload)
    }else{
        next(err)
    }
}
function errorHandler({message,stack},req,res,next){
    res.status(500).json({message,stack})

}

function ormErrorHandler(err,req,res,next){

    if(err instanceof ValidationError){

        res.status(409).json({
            statusCode: 409,
            message: err.name,
            errors: err.errors
        })

    }

    next(err)

}


module.exports = {
    properties:{
        body:'body',
        params:'params',
        query:'query'
    },
    validateRequest,
  
    buildMiddlewares: function(app){
    app.use(catchError)
    app.use(ormErrorHandler)
    app.use(boomErrorHandler)
    app.use(errorHandler)
    
}}