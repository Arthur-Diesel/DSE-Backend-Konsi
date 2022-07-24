const express = require('express')
const { getBenefit } = require('../Controllers/Benefits')
const { benefitionValidationRules, validateBenefitionRequest} = require('../Middlewares/BenefitionRequestValidator')

const router = express.Router()

router.post(
    '/',
    benefitionValidationRules(),
    validateBenefitionRequest,
    getBenefit
)

module.exports = router