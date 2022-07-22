const fetchLogin = require('./Login')

it('Login ~ Cpf ou Token não informado!', async () => {
    try{
        await fetchLogin()
    } catch (e) {
        expect(e).toMatch("Usuário ou Senha não informados!")
    }
})

it('Login ~ Falha na requisição!', async () => {
    try{
        await fetchLogin('XXXX', '1234')
    } catch (e) {
        expect(e).toMatch("Request failed with status code 401")
    }
})