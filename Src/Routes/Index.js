const express = require('express')
const BenefitRoutes = require('./Benefits')

const router = express.Router()
router.use('/benefits', BenefitRoutes)

module.exports = router