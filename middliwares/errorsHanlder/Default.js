// Extranal imports
const createErr =  require('http-errors')

function Error404(req,res,next){
    next(createErr(404,'404 - Request content not found!'))
}

function DefaultHandler(err,req,res,next){
    if(res.locals.html){
        res.status(err.status || 500);
        if(err.status===404){
            res.render('./errors/404-page.ejs',{
                errors:{
                    tittle:err.status,
                    body: err.message
                }
            })
        }
        res.render('./errors/errors-default.ejs',{
            errors:{
                tittle:err.status,
                body: err.message
            }
        })
    }
}

module.exports = {
    Error404,
    DefaultHandler
}