const axios = require("axios")
const loginUrl = 'http://extratoblubeapp-env.eba-mvegshhd.sa-east-1.elasticbeanstalk.com/login'

async function fetchLogin(user, password){
    return new Promise( async (resolve, reject) => {
        if (!user || !password) {
            return reject('Usuário ou Senha não informados!')
        }
        try {
            const responseLogin = await axios.post(
                loginUrl, {
                    login: user,
                    senha: password
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'Mozilla/5.0'
                    }
                }
            )
            return resolve(responseLogin.headers.authorization)
        } catch (err) {
            return reject(err.message)
        }
    })    
}

module.exports = fetchLogin