// Extranal imports
const express= require('express')
const dotenv= require('dotenv')

// Internal imports
const welcomeRouter =require('./routers/welcomeRouter')
const {Error404,DefaultHandler} = require('./middliwares/errorsHanlder/Default')

// Create app Object
const app = express();
//==================App Configaration================//
// 1. dotenv config setup
dotenv.config()
// 2. static folder setup
app.use(express.static(__dirname+'/public'))
// 3. ejs folder setup
app.set('view engine','ejs')

// 4 It's help to get data using post method
app.use(express.json())
app.use(express.urlencoded({
    extended:true
    }))

// 5. Route call
app.use('/',welcomeRouter)



// Handle errors
app.use(Error404)
app.use(DefaultHandler)






// Server running
app.listen(process.env.SERVER_RUNNING_PORT,()=>{
    console.log('application running on port '+process.env.SERVER_RUNNING_PORT)
})