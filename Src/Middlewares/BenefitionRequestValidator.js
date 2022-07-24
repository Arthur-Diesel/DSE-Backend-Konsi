const { check, validationResult } = require('express-validator')

const benefitionValidationRules = () => {
    return [
        check('user').not().isEmpty().withMessage('user precisa ser informado!'),
        check('password').not().isEmpty().withMessage('password precisa ser informado!'),
        check('cpf').not().isEmpty().withMessage('cpf precisa ser informado!'),
        check('cpf').isLength({min: 11}).withMessage('cpf precisa ter mais de 11 dígitos!')
    ]
}

function validateBenefitionRequest (req, res, next) {
    const errorsObject = validationResult(req)
    if (errorsObject.isEmpty()) {
        return next()
    } else {
        const { errors } = errorsObject
        const errorsArray = errors.map(error => `${error.param}: ${error.msg}`)
        return res.status(400).json({success:false, error: errorsArray})
    }
}

module.exports = {
    benefitionValidationRules,
    validateBenefitionRequest
}