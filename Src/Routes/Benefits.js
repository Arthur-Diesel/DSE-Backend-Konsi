const express = require('express')
const { check } = require('express-validator')
const { getBenefit } = require('../Controllers/Benefits')

const router = express.Router()

router.post(
    '/',
    check('user').not().isEmpty(),
    check('password').not().isEmpty(),
    check('cpf').not().isEmpty(),
    getBenefit
)

module.exports = router