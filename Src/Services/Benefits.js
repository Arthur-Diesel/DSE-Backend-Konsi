const axios = require("axios")
const benefitUrl = 'http://extratoblubeapp-env.eba-mvegshhd.sa-east-1.elasticbeanstalk.com/offline/listagem'

async function fetchBenefit(token, cpf){
    return new Promise( async (resolve, reject) => {
        if (!cpf || !token) {
            return reject('Cpf ou Token não informado!')
        }
        try {
            const responseBenefit = await axios.get(`${benefitUrl}/${cpf}`, 
            {
                headers: {
                    'Authorization': token,
                    'User-Agent': 'Mozilla/5.0'
                }
            })
            return resolve(responseBenefit.data.beneficios[0].nb)
        } catch (err) {
            return reject(err.message)
        }
    })
}


module.exports = fetchBenefit