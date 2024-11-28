import boom from '@hapi/boom'

export const properties = {body:'body',params:'params',query:'query'}
export function validateRequest(schema,property){

    return (req,res,next)=>{
        const data = req[property]
        const {error} = schema.validate(data,{abortEarly:false})
 
        if(error)
            next(boom.badRequest(error))
        else
            next()
 
    }

}

function catchError(){
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

export default function(app){
    app.use(catchError) 
    app.use(boomErrorHandler)
    app.use(errorHandler)
    
}