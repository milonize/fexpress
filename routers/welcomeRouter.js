// Extranal imports
const express= require('express')

// Internal imports
const {welcomePG} = require('../controllers/welcomeController')
const htmlResponse = require('./../middliwares/htmlResponse')

const router = express.Router();


router.get('/',htmlResponse('Welcome'),welcomePG)


// Export route to you app
module.exports = router;