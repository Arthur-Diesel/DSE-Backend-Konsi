const express = require('express')
const { check } = require('express-validator')
const { getBenefit } = require('../Controllers/Benefits')

const router = express.Router()

router.post(
    '/',
    check('user').not().isEmpty().withMessage('user precisa ser informado!'),
    check('password').not().isEmpty().withMessage('password precisa ser informado!'),
    check('cpf').not().isEmpty().withMessage('cpf precisa ser informado!'),
    check('cpf').isLength({min: 11}).withMessage('cpf precisa ter mais de 11 dígitos!'),
    getBenefit
)

module.exports = router