
function welcomePG(req,res,next){
    res.render('welcome/welcome.ejs')
}

// Continue your custom conroller funtion here:

// function conrollername(req,res,next){
//     res.render('your view file name')
// }




// Export you controller
module.exports = {
    welcomePG,
}