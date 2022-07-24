const fetchLogin = require('../Services/Login')
const fetchBenefit = require('../Services/Benefits')

async function getBenefit (req, res) {
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