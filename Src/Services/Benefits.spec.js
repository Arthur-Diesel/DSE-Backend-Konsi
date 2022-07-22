const fetchBenefit = require('./Benefits')

it('Benefit ~ Cpf ou Token não informado!', async () => {
    try{
        await fetchBenefit()
    } catch (e) {
        expect(e).toMatch("Cpf ou Token não informado!")
    }
})

it('Benefit ~ Falha na requisição!', async () => {
    try{
        await fetchBenefit('Bearer XXXXXXX', '12345678910')
    } catch (e) {
        expect(e).toMatch("Request failed with status code 403")
    }
})