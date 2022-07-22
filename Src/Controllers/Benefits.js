const fetchLogin = require('../Services/Login')
const fetchBenefit = require('../Services/Benefits')
const { validationResult } = require('express-validator')

async function getBenefit (req, res) {
    const { errors } = validationResult(req)
    if(errors && errors.length >= 1){
        const errorsArray = errors.map(error => `${error.param}: ${error.msg}`)
        return res.status(400).json({success:false, error: errorsArray})
    }
    try{
        const token = await fetchLogin(req.body.user, req.body.password)
        const nb = await fetchBenefit(token, req.body.cpf)
        return res.status(200).json({success: true, data: { nb }})
    } catch (err) {
        return res.status(400).json({success:false, error: err})
    }
}

module.exports = {
    getBenefit
}